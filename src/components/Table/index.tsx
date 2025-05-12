import Filter from "../Filter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProducts } from "../../hooks/useProducts.js";
import { deleteProduct } from "../../services/api.js";
import { useState } from "react";
import HandlePageChange from "../HandlePageChange/index.js";
import { useTotalProducts } from "../../hooks/useTotalProducts";
import TableHead from "./TableHead/index.js";
import TableBody from "./TableBody/index.js";
const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 10;
  const skip = (pageNumber - 1) * limit;

  const { data: totalItems, isLoading: isTotalLoading } = useTotalProducts();

  const [selectedCategory, setSelectedCategory] = useState("");

  const queryClient = useQueryClient();

  const {
    data: allProducts,
    isLoading,
    isError,
  } = useProducts({ limit: limit, skip: skip, category: selectedCategory });

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
