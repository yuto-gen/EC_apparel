import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import { useSearchStore } from "@/store/searchStore";
import { useLangStore } from "@/store/langStore";

const Header = () => {
  const totalQuantity = useCartStore((state) => state.totalQuantity());
  const { query, setQuery } = useSearchStore();
  const { lang, setLang } = useLangStore();

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/products" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
        </Link>

        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "ja" ? "商品を検索..." : "Search for products..."}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <nav className="flex items-center gap-6 text-gray-700 text-lg">
          <Link to="/wishlist">
            <FaHeart className="text-xl" />
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2">
                {totalQuantity}
              </span>
            )}
          </Link>

          <Link to="/login">
            <FaUser className="text-xl" />
          </Link>

          <button
            onClick={() => setLang(lang === "ja" ? "en" : "ja")}
            className="px-2 py-1 border rounded text-sm"
          >
            {lang === "ja" ? "EN" : "日本語"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
