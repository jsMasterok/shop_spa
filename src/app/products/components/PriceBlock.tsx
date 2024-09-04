"use client";

import { useCart } from "@/app/utils/store";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PriceBlock({
  id,
  price,
  totalCount,
  name,
  img,
  type,
  variationsId,
}: {
  id: string;
  price: number;
  totalCount: number;
  name: string;
  img: string;
  type: string;
  variationsId: number;
}) {
  const Cart = useCart((state: any) => state.addToCart);
  const updCount = useCart((state: any) => state.updateItemCount);

  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<any>(price);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex w-full">
      {/* <div className="hidden items-center justify-between gap-x-2 border border-slate-100 rounded-md px-2">
        <button
          onClick={() => {
            if (count <= 1) {
              return toast.error("Кількість товару не може бути менше 1");
            }
            setCount(count - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#a2b4ca"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <input
          type="number"
          disabled
          value={count}
          className="w-full border-0 p-2 focus:outline-0 focus:ring-0 focus:border-0 text-center text-sm font-semibold text-slate-600"
        />
        <button
          onClick={async () => {
            if (count > totalCount) {
              return toast.error("Товару більше немає на складі");
            }
            setCount(count + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#a2b4ca"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div> */}
      {/* <div className="flex items-center justify-center text-base font-semibold text-slate-600">
        {count * price} UAH
      </div> */}
      <div className="col-span-2 lg:col-span-1 w-full">
        <button
          onClick={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLoading(true);
            await addToCart(
              id,
              name,
              price,
              img,
              count,
              type,
              totalCount,
              price,
              variationsId
            );
            updCount(id, count);
            setTimeout(() => {
              setIsLoading(false);
              toast.success("Товар додано до кошика");
            }, 300);
          }}
          type="button"
          className="w-full flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
        >
          Додати в кошик - {price}.00 UAH
          {isLoading ? (
            <div className="w-fit h-fit animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
