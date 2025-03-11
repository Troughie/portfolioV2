import { create } from "zustand";

interface IntroScrolled {
  isScrolled: boolean;
  setIsScrolled: (props: boolean) => void;
}

interface ViewActive {
  name: string;
  setName: (prop: string) => void;
}
export const useIntroScrolled = create<IntroScrolled>((set) => ({
  isScrolled: false,
  setIsScrolled: (prop: boolean) => {
    set({ isScrolled: prop });
  },
}));

export const useViewActive = create<ViewActive>((set) => ({
  name: "",
  setName: (prop: string) => {
    set({ name: prop });
  },
}));
