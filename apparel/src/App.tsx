import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "@/store/authStore";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Login from "@/pages/Login";

import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import CheckoutForm from "@/pages/CheckoutForm";
import CheckoutConfirm from "@/pages/CheckoutConfirm";
import CheckoutComplete from "@/pages/CheckoutComplete";
import Wishlist from "@/pages/Wishlist";

import AdminDashboard from "@/features/admin/pages/AdminDashboard";
import AdminAddProduct from "@/features/admin/pages/AdminAddProduct";
import AdminEditProduct from "@/features/admin/pages/AdminEditProduct";

function PrivateRoute({ children, role }: { children: ReactNode; role: "user" | "admin" }) {
  const { isLoggedIn, role: currentRole } = useAuthStore();
  if (!isLoggedIn) return <Navigate to="/login" />;
  if (currentRole !== role) return <Navigate to="/login" />;
  return children;
}

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; 

  return (
    <>
      {!hideLayout && <Header />}
      <main className="pt-16">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/products"
          element={
            <Layout>
              <PrivateRoute role="user">
                <Products />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout>
              <PrivateRoute role="user">
                <ProductDetail />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <PrivateRoute role="user">
                <Cart />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <PrivateRoute role="user">
                <CheckoutForm />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/checkout/confirm"
          element={
            <Layout>
              <PrivateRoute role="user">
                <CheckoutConfirm />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/checkout/complete"
          element={
            <Layout>
              <PrivateRoute role="user">
                <CheckoutComplete />
              </PrivateRoute>
            </Layout>
          }
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={
            <Layout>
              <PrivateRoute role="user">
                <Wishlist />
              </PrivateRoute>
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <Layout>
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/admin/add"
          element={
            <Layout>
              <PrivateRoute role="admin">
                <AdminAddProduct />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <Layout>
              <PrivateRoute role="admin">
                <AdminEditProduct />
              </PrivateRoute>
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;