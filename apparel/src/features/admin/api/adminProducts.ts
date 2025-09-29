import axios from "@/lib/axios";
import { type Product } from "@/features/products/types/product";

export const createProduct = async (product: Product) => {
  const { data } = await axios.post("/products", product);
  return data;
};

export const updateProduct = async (id: string, product: Product) => {
  const { data } = await axios.put(`/products/${id}`, product);
  return data;
};

export const deleteProduct = async (id: string) => {
  await axios.delete(`/products/${id}`);
};
