import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "@/features/products/api/getProduct";
import AdminProductForm, { type ProductFormValues } from "../components/AdminProductForm";
import { updateProduct } from "../api/adminProducts";

const AdminEditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id || "");
  const navigate = useNavigate();

  if (isLoading) return <p>読み込み中...</p>;
  if (!product) return <p>商品が見つかりません。</p>;

  const handleUpdate = async (data: ProductFormValues) => {
    await updateProduct(product.id, { ...product, ...data });
    navigate("/admin");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">商品編集</h1>
      <AdminProductForm defaultValues={product} onSubmit={handleUpdate} />
    </div>
  );
};

export default AdminEditProduct;
