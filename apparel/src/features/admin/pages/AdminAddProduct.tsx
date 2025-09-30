import AdminProductForm, { type ProductFormValues } from "../components/AdminProductForm";
import { createProduct } from "../api/adminProducts";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const navigate = useNavigate();

  const handleAdd = async (data: ProductFormValues) => {
    await createProduct({ ...data, id: String(Date.now()) });
    navigate("/admin");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">商品追加</h1>
      <AdminProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default AdminAddProduct;
