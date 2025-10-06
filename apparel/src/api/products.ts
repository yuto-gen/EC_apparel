import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("/api/products"); 
  return res.data;
};
