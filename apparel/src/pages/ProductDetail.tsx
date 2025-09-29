import { useParams } from "react-router-dom";
import { useProduct } from "@/features/products/api/getProduct";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useLangStore } from "@/store/langStore";
import { messages } from "@/lib/i18n";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProduct(id || "");
  const addToCart = useCartStore((state) => state.addToCart);
  const { lang } = useLangStore();

  if (isLoading) return <p>読み込み中...</p>;
  if (error || !product) return <p>商品が見つかりません。</p>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(messages[lang].addToCart(product.name));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-700 mb-4">¥{product.price.toLocaleString()}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {lang === "ja" ? "カートに追加" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
