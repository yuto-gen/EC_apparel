import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("/api/products"); // ✅ baseURL不要
  return res.data;
};
