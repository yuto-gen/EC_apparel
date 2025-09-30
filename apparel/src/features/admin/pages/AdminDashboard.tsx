import AdminProductList from "../components/AdminProductList";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">管理画面</h1>
      <AdminProductList />
    </div>
  );
};

export default AdminDashboard;
