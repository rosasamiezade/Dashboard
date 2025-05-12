import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/api";

interface IuseProductsProps {
  limit: number;
  skip: number;
  category?: string;
}

export const useProducts = ({ limit, skip, category }: IuseProductsProps) => {
  return useQuery({
    queryKey: ["products", limit, skip, category],
    queryFn: getAllProducts,
  });
};
