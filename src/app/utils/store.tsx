import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  loading: false,
  error: null,
  addToCart: (
    id: Number,
    title: String,
    total_price: Number,
    img: String,
    count: Number,
    type: Number
  ) =>
    set((state: any) => {
      const newCartItem = {
        id,
        title,
        total_price,
        img,
        count,
        type,
      };
      return { items: [...state.items, newCartItem] };
    }),
  removeFromCart: (id: number) =>
    set((state: any) => {
      return { items: state.items.filter((item: any) => item.id !== id) };
    }),
  removeAll: () =>
    set(() => {
      return { items: [] };
    }),
}));
