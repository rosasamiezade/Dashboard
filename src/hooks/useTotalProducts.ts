import { useQuery } from "@tanstack/react-query";
import { getTotalProductsAmount } from "../services/api";

export const useTotalProducts = () => {
  return useQuery({
    queryKey: ["total-products"],
    queryFn: getTotalProductsAmount,
  });
};
