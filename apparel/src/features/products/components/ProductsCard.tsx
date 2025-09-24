import type { Product } from "../types/product";
import { Link } from "react-router-dom";

type Props = { product: Product };

export const ProductCard = ({ product }: Props) => (
  <div className="border rounded-lg shadow p-4 hover:shadow-md transition">
    <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-gray-600">¥{product.price.toLocaleString()}</p>
    </Link>
  </div>
);
