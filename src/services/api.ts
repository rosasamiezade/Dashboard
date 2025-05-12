import axios from "axios";
import type { QueryFunctionContext } from "@tanstack/react-query";

const API_BASE = "https://dummyjson.com";

export const getAllProducts = async ({ queryKey }: QueryFunctionContext) => {
  const [, limit, skip, category] = queryKey as [
    string,
    number,
    number,
    string?
  ];

  const url =
    category && category !== "All"
      ? `${API_BASE}/products/category/${category}?limit=${limit}&skip=${skip}`
      : `${API_BASE}/products?limit=${limit}&skip=${skip}`;

  const response = await axios.get(url);
  return response.data;
};
export const getTotalProductsAmount = async ({
  queryKey,
}: QueryFunctionContext) => {
  const [, category] = queryKey;

  const url =
    category && category !== "All"
      ? `${API_BASE}/products/category/${category}?limit=0&skip=0`
      : `${API_BASE}/products?limit=0&skip=0`;

  const response = await axios.get(url);
  return response.data.total;
};

export const getCategories = async () => {
  const response = axios.get(`${API_BASE}/products/category-list`);
  return (await response).data;
};

export const getFilteredProducts = async (category: string) => {
  const response = axios.get(
    `https://dummyjson.com/products/category/${category}?limit=10&skip=10`
  );
  return (await response).data;
};

export const deleteProduct = (id: number) => {
  return axios.delete(`${API_BASE}/products/${id}`);
};
