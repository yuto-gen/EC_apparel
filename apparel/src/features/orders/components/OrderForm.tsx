import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, type OrderFormValues } from "@/schemas/orderSchema";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (data: OrderFormValues) => {
    console.log("注文データ:", data);
    alert("注文が完了しました！\n" + JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block font-semibold">名前</label>
        <input {...register("name")} className="border rounded w-full p-2" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-semibold">メールアドレス</label>
        <input {...register("email")} className="border rounded w-full p-2" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-semibold">郵便番号</label>
        <input {...register("postalCode")} placeholder="123-4567" className="border rounded w-full p-2" />
        {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
      </div>

      <div>
        <label className="block font-semibold">住所</label>
        <input {...register("address")} className="border rounded w-full p-2" />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>

      <div>
        <label className="block font-semibold">電話番号</label>
        <input {...register("phone")} placeholder="09012345678" className="border rounded w-full p-2" />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        注文を確定する
      </button>
    </form>
  );
};

export default OrderForm;
