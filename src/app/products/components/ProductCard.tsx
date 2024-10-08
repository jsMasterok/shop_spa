"use client";
import { useCart } from "@/app/utils/store";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductCard({
  id,
  title,
  price,
  type,
  img,
  total_count,
  variationsId,
}: {
  id: string;
  title: string;
  price: any;
  type: string;
  img: string;
  total_count: number;
  variationsId: number;
}) {
  const addToCart = useCart((state: any) => state.addToCart);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const formattedPrice = new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
  }).format(price);

  return (
    <div
      className="w-full h-full flex flex-1 shadow-md border border-slate-100 p-2 rounded-md hover:shadow-lg transition-shadow"
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="flex flex-col w-full gap-y-2 justify-between">
        <div className="w-full flex h-72 rounded-md relative">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="Image"
            quality={100}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-sm text-slate-500 truncate ">{title}</h4>
          <span className="text-xs text-slate-400">{type}</span>
          <span className="text-xs text-slate-400">{formattedPrice}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLoading(true);
              addToCart(
                id,
                title,
                price,
                img,
                1,
                type,
                total_count,
                price,
                variationsId
              );
              setTimeout(() => {
                setIsLoading(false);
                toast.success("Товар додано до кошика");
              }, 300);
            }}
            type="button"
            className="w-full flex items-center justify-center gap-x-1 text-center text-xs font-semibold text-slate-400 rounded-md bg-slate-200 py-1 hover:text-slate-200 hover:bg-slate-400 transition-colors"
          >
            Додати в кошик{" "}
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
    </div>
  );
}
