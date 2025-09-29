import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import type { Product } from "../types/product";

export const fetchProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id, 
  });
};
