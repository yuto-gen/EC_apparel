import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が不正です"),
  postalCode: z.string().regex(/^\d{3}-\d{4}$/, "郵便番号は 123-4567 の形式で入力してください"),
  address: z.string().min(1, "住所は必須です"),
  phone: z.string().regex(/^\d{10,11}$/, "電話番号は10〜11桁の数字で入力してください"),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
