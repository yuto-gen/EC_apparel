import type { Product } from "../types/product";

type Props = { product: Product };

export const ProductCard = ({ product }: Props) => (
  <div className="border rounded-lg shadow p-4 hover:shadow-md transition">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
    <h3 className="mt-2 font-semibold">{product.name}</h3>
    <p className="text-gray-600">¥{product.price.toLocaleString()}</p>
    <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
      カートに追加
    </button>
  </div>
);
