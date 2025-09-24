import { ProductCard } from "./ProductsCard";
import { useProducts } from "../api/getProducts";
import type { Product } from "../types/product";

export const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました。</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
