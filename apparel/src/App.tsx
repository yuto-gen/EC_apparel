import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Products from "@/pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
