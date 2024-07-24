"use client";

import Image from "next/image";
import { useState } from "react";
import { deleteCartItem } from "../utils/apiClient";

export default function CartItem({
  mutate,
  id,
  img,
  name,
  type,
  count,
  totalPrice,
}: {
  mutate: () => void;
  id: number;
  img: string;
  name: string;
  type: string;
  count: number;
  totalPrice: number;
}) {
  const [deleting, setDeleting] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between gap-x-2 p-1 border-2 border-slate-100 rounded-md">
      <div className="w-14 h-14 relative">
        <Image src={img} layout="fill" objectFit="cover" alt="Image" />
      </div>
      <div className="flex items-start flex-col gap-y-1">
        <span className="text-xs font-semibold text-slate-600">{name}</span>
        <span className="text-xs font-semibold text-slate-400">{type}</span>
      </div>
      <div className="flex items-center flex-col gap-y-1">
        <span className="text-xs font-semibold text-slate-600">Кількість</span>
        <span className="text-xs font-semibold text-slate-400">{count}</span>
      </div>
      <div className="flex items-center flex-col gap-y-1">
        <span className="text-xs font-semibold text-slate-600">Сумма</span>
        <span className="text-xs font-semibold text-slate-400">
          {parseInt(totalPrice)}
        </span>
      </div>
      <button
        onClick={() => {
          setDeleting(true);
          deleteCartItem(id)
            .then(() => mutate())
            .finally(() => setDeleting(false));
        }}
        className="w-fit h-fit p-2 bg-red-500 rounded-md hover:bg-red-700 transition-colors"
      >
        {deleting ? (
          <div className="w-fit h-fit animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
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
            stroke="white"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
