import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "@/pages/Products";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/products">商品一覧</Link>
        <Link to="/cart">カート</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
