// src/store/cartStore.ts
import { create } from "zustand";
import type { Product } from "@/features/products/types/product";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  totalQuantity: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  clearCart: () => set({ items: [] }),
  totalQuantity: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),
}));
