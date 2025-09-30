import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, type OrderFormValues } from "@/schemas/orderSchema";
import { useOrderStore } from "@/store/orderStore";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { setOrderData } = useOrderStore();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (data: OrderFormValues) => {
    setOrderData(data);
    navigate("/checkout/confirm");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-6">
      <div>
        <label>名前</label>
        <input {...register("name")} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>メールアドレス</label>
        <input {...register("email")} className="border p-2 w-full" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>郵便番号</label>
        <input {...register("postalCode")} placeholder="123-4567" className="border p-2 w-full" />
        {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
      </div>

      <div>
        <label>住所</label>
        <input {...register("address")} className="border p-2 w-full" />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>

      <div>
        <label>電話番号</label>
        <input {...register("phone")} placeholder="09012345678" className="border p-2 w-full" />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        確認画面へ
      </button>
    </form>
  );
};

export default CheckoutForm;
