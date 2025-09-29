import { useWishlistStore } from "@/store/wishlistStore";
import ProductCard from "@/features/products/components/ProductsCard";

const Wishlist = () => {
  const { items } = useWishlistStore();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {items.length === 0 ? (
        <p>お気に入りはまだありません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
