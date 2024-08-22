"use client";

import useSWR from "swr";
import { API, BW_API } from "../utils/constants";
import { fetcher } from "../utils/apiClient";
import CartItem from "./CartItem";
import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { data, mutate, isLoading, error } = useSWR(`${BW_API}/cart`, fetcher);
  const [open, setIsopen] = useState<boolean>(false);
  const router = useRouter();
  const toggleOpen = () => setIsopen(!open);

  console.log(data);

  if (isLoading) return;
  return (
    <>
      <div className="relative z-30">
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={toggleOpen}
          type="button"
          className="hover:bg-slate-100 rounded-md p-1 transition-colors relative"
        >
          {data?.length > 0 && (
            <div className="w-4 h-4 flex items-center justify-center rounded-full border-slate-400 border text-slate-400 absolute -top-1 -right-1 text-xs">
              {data.length}
            </div>
          )}
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
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              left: "-100%",
            }}
            animate={{
              left: 0,
            }}
            exit={{
              left: "-100%",
            }}
            className={classNames(
              "fixed z-50 w-[90%] lg:w-1/2 xl:w-1/3 border-r-2 bg-white border-r-slate-100 top-0 left-0 h-screen flex-col flex gap-3 px-2 py-4"
            )}
          >
            <button
              type="button"
              onClick={toggleOpen}
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
              {!data && (
                <div className="w-full h-full flex items-center justify-center flex-col gap-y-2">
                  <h3 className="text-xl inline-flex items-center gap-x-1 font-semibold text-slate-600">
                    Схоже що кошик порожній
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
                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                      />
                    </svg>
                  </h3>
                  <button
                    onClick={() => {
                      toggleOpen();
                      router.push("/products");
                    }}
                    type="button"
                    className="inline-flex border border-slate-100 rounded-md text-sm font-semibold text-slate-400 px-4 py-2 mt-2 gap-x-1 items-center hover:text-slate-500 hover:border-slate-500 transition-all"
                  >
                    До каталогу
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              )}
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
              disabled={!data}
              className="w-full disabled:bg-opacity-20 disabled:cursor-not-allowed disabled:text-slate-300 flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
