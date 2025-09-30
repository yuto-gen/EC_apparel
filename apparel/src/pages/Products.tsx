import { Link } from "react-router-dom";
import { useProducts } from "@/features/products/api/getProducts";
import Hero from "@/components/common/Hero";

const Products = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <p className="pt-24 text-center">Loading...</p>;

  return (
    <div className="relative min-h-screen bg-white">
      <Hero />

      <div
        id="products"
        className="relative max-w-7xl mx-auto px-6 pt-20 pb-16"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products?.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  ¥{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
