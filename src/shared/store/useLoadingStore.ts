import { create } from "zustand";

interface LoadingState {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
    isLoading: false, // 초기값
    setIsLoading: (value) => set({ isLoading: value }),
}));
