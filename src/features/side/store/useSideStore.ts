import { create } from "zustand";

type sideType = {
    isSearchOpen: boolean;
    setIsSearchOpen: (isSearchOpen: boolean) => void;
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
};

export const useSideStore = create<sideType>((set) => ({
    isSearchOpen: false,
    setIsSearchOpen: (isSearchOpen: boolean) => set({ isSearchOpen }),

    searchQuery: "",
    setSearchQuery: (searchQuery: string) => set({ searchQuery }),
}));
