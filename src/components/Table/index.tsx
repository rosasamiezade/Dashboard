import Filter from "../Filter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/api.js";
import { useState } from "react";
import HandlePageChange from "../HandlePageChange/index.js";
import TableHead from "./TableHead/index.js";
import TableBody from "./TableBody/index.js";
import { useQuery } from "@tanstack/react-query";
import { getTotalProductsAmount } from "../../services/api";
import { getAllProducts } from "../../services/api.js";

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const limit = 10;
  const skip = (pageNumber - 1) * limit;

  const { data: totalItems, isLoading: isTotalLoading } = useQuery({
    queryKey: ["total-products", selectedCategory],
    queryFn: getTotalProductsAmount,
  });

  const queryClient = useQueryClient();

  const {
    data: allProducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", limit, skip, selectedCategory],
    queryFn: getAllProducts,
  });

  const fetchedProducts = allProducts?.products;

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["totalProducts"] });
    },
  });

  if (isLoading || isTotalLoading) return <p>Loading products...</p>;

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className="w-full">
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="w-full">
        <table className="h-auto w-full rounded-tl-sm rounded-tr-sm overflow-hidden">
          <TableHead />
          <TableBody
            products={fetchedProducts}
            onDelete={(id) => {
              mutation.mutate(id);
            }}
          />
        </table>
      </div>

      <HandlePageChange
        limit={10}
        totalItems={totalItems}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Table;
