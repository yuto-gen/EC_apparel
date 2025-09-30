import { useProducts } from "../api/getProducts";
import ProductCard from "./ProductsCard";
import { useSearchStore } from "@/store/searchStore";

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();
  const { query } = useSearchStore();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const filtered = products?.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {filtered?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
