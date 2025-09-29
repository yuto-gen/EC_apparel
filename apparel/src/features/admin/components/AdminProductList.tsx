import { useProducts } from "@/features/products/api/getProducts";
import { deleteProduct } from "../api/adminProducts";

const AdminProductList = () => {
  const { data, isLoading, refetch } = useProducts();

  if (isLoading) return <p>読み込み中...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">商品一覧（管理用）</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">商品名</th>
            <th className="p-2 border">価格</th>
            <th className="p-2 border">操作</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">¥{p.price.toLocaleString()}</td>
              <td className="p-2 border">
                <button className="text-blue-600 hover:underline mr-2">
                  編集
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={async () => {
                    await deleteProduct(p.id);
                    refetch(); 
                  }}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;

