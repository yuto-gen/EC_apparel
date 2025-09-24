import { ProductCard } from "./ProductsCard";
import { useProducts } from "../api/getProducts";

export const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました。</p>;
 if (!data || data.length === 0) return <p>商品が見つかりません。</p>; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
