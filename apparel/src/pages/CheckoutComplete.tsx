import { useEffect } from "react";
import { toast } from "sonner";
import { useLangStore } from "@/store/langStore";
import { messages } from "@/lib/i18n";

const CheckoutComplete = () => {
  const { lang } = useLangStore();

  useEffect(() => {
    toast.success(messages[lang].checkoutComplete, {
      description: messages[lang].checkoutDescription,
    });
  }, [lang]);

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "ja" ? "購入完了" : "Order Complete"}
      </h1>
      <p>
        {lang === "ja"
          ? "ご注文が正常に処理されました。"
          : "Your order has been successfully processed."}
      </p>
    </div>
  );
};

export default CheckoutComplete;
