import { create } from "zustand";
import type { Product } from "@/features/products/types/product";

type WishlistState = {
  items: Product[];
  toggleWishlist: (product: Product) => void;
};

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  toggleWishlist: (product) => {
    const exists = get().items.find((item) => item.id === product.id);
    if (exists) {
      set({ items: get().items.filter((item) => item.id !== product.id) });
    } else {
      set({ items: [...get().items, product] });
    }
  },
}));
