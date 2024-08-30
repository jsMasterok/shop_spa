import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  loading: false,
  error: null,
  addToCart: (
    id: Number,
    title: String,
    price: Number,
    img: String,
    quantity: Number,
    type: Number,
    total_count: Number,
    initial_price: Number,
    variationsId: Number
  ) =>
    set((state: any) => {
      const existingItemIndex = state.items.findIndex(
        (item: any) => item.id === id
      );

      if (existingItemIndex >= 0) {
        // Если товар уже существует, обновляем его количество
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity; // Увеличиваем количество
        return { items: updatedItems };
      } else {
        // Если товара нет, добавляем новый
        const newCartItem = {
          id,
          title,
          price,
          img,
          quantity,
          type,
          total_count,
          initial_price,
          variationsId,
        };
        return { items: [...state.items, newCartItem] };
      }
    }),

  updateItemCount: (id: number, newCount: number) =>
    set((state: any) => {
      const calculateTotalPrice = (
        quantity: number,
        unitPrice: number
      ): number => {
        return quantity * unitPrice;
      };
      const updatedItems = state.items.map((item: any) => {
        if (item.id === id) {
          const newTotalPrice = calculateTotalPrice(
            newCount,
            item.initial_price
          );
          return { ...item, quantity: newCount, price: newTotalPrice }; // Просто обновляем количество
        }
        return item; // Возвращаем остальные товары без изменений
      });
      return { items: updatedItems };
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
