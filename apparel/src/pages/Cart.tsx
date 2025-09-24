import { useCartStore } from "@/store/cartStore";

const Cart = () => {
  const { items, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <p className="p-6">カートに商品がありません。</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">ショッピングカート</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  ＋
                </button>
              </div>
            </div>
            <div className="text-right">
              <p>¥{(item.price * item.quantity).toLocaleString()}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline ml-2"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between">
        <p className="text-xl font-semibold">合計: ¥{total.toLocaleString()}</p>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          カートを空にする
        </button>
      </div>
    </div>
  );
};

export default Cart;
