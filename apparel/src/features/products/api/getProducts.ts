import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import type { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("/products");
  return data;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
