import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import type { Product } from "../types/product";
import { useWishlistStore } from "@/store/wishlistStore";

const ProductCard = ({ product }: { product: Product }) => {
  const { items, toggleWishlist } = useWishlistStore();
  const isInWishlist = items.some((item) => item.id === product.id);

  return (
    <div className="relative border rounded-md shadow-sm p-4 bg-white">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="mt-2 font-semibold">{product.name}</h2>
        <p>¥{product.price.toLocaleString()}</p>
      </Link>

      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-2 right-2 text-xl ${
          isInWishlist ? "text-red-500" : "text-gray-400"
        }`}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;
