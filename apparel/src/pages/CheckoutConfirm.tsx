import { useOrderStore } from "@/store/orderStore";
import { useCartStore } from "@/store/cartStore";
import { useNavigate } from "react-router-dom";

const CheckoutConfirm = () => {
  const { orderData, setOrderNumber, clearOrderData } = useOrderStore();
  const { items, clearCart } = useCartStore();
  const navigate = useNavigate();

  if (!orderData) {
    navigate("/checkout");
    return null;
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    const number = "ORD-" + Date.now().toString().slice(-6);
    setOrderNumber(number);

    clearOrderData();
    clearCart();

    navigate("/checkout/complete");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">注文内容の確認</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">お届け先情報</h2>
        <ul className="space-y-1">
          <li><strong>名前:</strong> {orderData.name}</li>
          <li><strong>メール:</strong> {orderData.email}</li>
          <li><strong>郵便番号:</strong> {orderData.postalCode}</li>
          <li><strong>住所:</strong> {orderData.address}</li>
          <li><strong>電話番号:</strong> {orderData.phone}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">ご注文商品</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>¥{(item.price * item.quantity).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">合計: ¥{total.toLocaleString()}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          修正する
        </button>
        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          注文を確定する
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfirm;
