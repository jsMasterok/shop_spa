"use client";

import useSWR from "swr";
import { API } from "../utils/constants";
import { fetcher } from "../utils/apiClient";
import Link from "next/link";
import CartItem from "./CartItem";
import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { data, mutate, isLoading, error } = useSWR(`${API}/cart`, fetcher);
  const [open, setIsopen] = useState<boolean>(false);
  const router = useRouter();
  if (isLoading || !data) return;
  return (
    <>
      <div>
        <button
          onClick={() => setIsopen(true)}
          type="button"
          className="hover:bg-slate-100 rounded-md p-1 transition-colors relative"
        >
          <div className="w-4 h-4 flex items-center justify-center rounded-full border-slate-400 border text-slate-400 absolute -top-1 -right-1 text-xs">
            {data.length}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#a2b4ca"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>
      <div
        className={classNames(
          "fixed z-50 w-[90%] border-r-2 bg-white border-r-slate-100 top-0 left-0 h-screen flex-col gap-3 px-2 py-4",
          {
            flex: open,
            hidden: !open,
          }
        )}
      >
        <button
          type="button"
          onClick={() => setIsopen(false)}
          className="absolute top-2 right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-2xl text-center font-semibold text-slate-600">
          Кошик
        </h3>
        {/*  */}
        <div className="flex w-full flex-1 flex-col gap-y-2 py-2 overflow-y-auto">
          {data?.map((item: any, i: number) => {
            return (
              <CartItem
                id={item.id}
                mutate={mutate}
                img={item.image}
                name={item.name}
                totalPrice={item.total_price}
                count={item.count}
                type={item.type}
                key={i}
              />
            );
          })}
        </div>
        {/*  */}
        <button
          className="w-full flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
          onClick={() => {
            setIsopen(false);
            router.push("/payment");
          }}
        >
          Перейти до сплати
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
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
