import { create } from "zustand";
import { type OrderFormValues } from "@/schemas/orderSchema";

type OrderState = {
  orderData: OrderFormValues | null;
  orderNumber: string | null; 
  setOrderData: (data: OrderFormValues) => void;
  setOrderNumber: (number: string) => void;
  clearOrderData: () => void;
};

export const useOrderStore = create<OrderState>((set) => ({
  orderData: null,
  orderNumber: null,
  setOrderData: (data) => set({ orderData: data }),
  setOrderNumber: (number) => set({ orderNumber: number }),
  clearOrderData: () => set({ orderData: null, orderNumber: null }),
}));
