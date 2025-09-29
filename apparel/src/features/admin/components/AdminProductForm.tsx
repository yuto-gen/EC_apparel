import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@/features/products/types/product";

const productSchema = z.object({
  name: z.string().min(1, "商品名は必須です"),
  price: z.number().min(1, "価格は1円以上で入力してください"),
  image: z.string().url("有効な画像URLを入力してください"),
  description: z.string().min(1, "説明文は必須です"),
});

export type ProductFormValues = z.infer<typeof productSchema>;

type Props = {
  defaultValues?: Product;
  onSubmit: (data: ProductFormValues) => void;
};

const AdminProductForm = ({ defaultValues, onSubmit }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label>商品名</label>
        <input {...register("name")} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>価格</label>
        <input type="number" {...register("price", { valueAsNumber: true })} className="border p-2 w-full" />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div>
        <label>画像URL</label>
        <input {...register("image")} className="border p-2 w-full" />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <div>
        <label>説明文</label>
        <textarea {...register("description")} className="border p-2 w-full" rows={4} />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {defaultValues ? "更新する" : "追加する"}
      </button>
    </form>
  );
};

export default AdminProductForm;
