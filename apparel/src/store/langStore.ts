import { create } from "zustand";

type Lang = "ja" | "en";

type LangState = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export const useLangStore = create<LangState>((set) => ({
  lang: "ja",
  setLang: (l) => set({ lang: l }),
}));
