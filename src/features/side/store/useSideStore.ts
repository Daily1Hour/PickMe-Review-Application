import { create } from "zustand";

type sideType = {
    isSearchOpen: boolean;
    setIsSearchOpen: (isSearchOpen: boolean) => void;
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
};

export const useSideStore = create<sideType>((set) => ({
    isSearchOpen: false, // 검색창 상태
    setIsSearchOpen: (isSearchOpen: boolean) => set({ isSearchOpen }),

    searchQuery: "", // 검색 쿼리 상태 관리
    setSearchQuery: (searchQuery: string) => set({ searchQuery }),
}));
