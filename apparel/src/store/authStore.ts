import { create } from "zustand";

type Role = "user" | "admin" | null;

type AuthState = {
  role: Role;
  isLoggedIn: boolean;
  login: (role: Role) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  role: null,
  isLoggedIn: false,
  login: (role) => set({ role, isLoggedIn: true }),
  logout: () => set({ role: null, isLoggedIn: false }),
}));
