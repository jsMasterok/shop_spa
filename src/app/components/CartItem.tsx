"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "../utils/store";
import Link from "next/link";

export default function CartItem({
  id,
  img,
  name,
  type,
  count,
  price,
  total_count,
}: {
  id: Number;
  img: string;
  name: string;
  type: string;
  count: number;
  price: any;
  total_count: number;
}) {
  const [deleting, setDeleting] = useState<boolean>(false);
  const removeFromCart = useCart((state: any) => state.removeFromCart);
  const updCount = useCart((state: any) => state.updateItemCount);
  const [totalPrice, setTotalPrice] = useState(price);

  return (
    <div className="flex p-2 border-2 items-center justify-between border-slate-100 rounded-md gap-x-2">
      <div className="w-14 h-14 relative">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <Link
            href={`/products/${id}`}
            className="text-xs truncate font-semibold max-w-36 sm:max-w-full text-nowrap text-slate-600 hover:underline"
          >
            {name}
          </Link>
          <span className="text-xs font-semibold text-slate-400">{type}</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <div className="flex items-center flex-col gap-y-1">
            <span className="text-xs font-semibold text-slate-600">
              Кількість
            </span>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => {
                  if (count === 1) {
                    setDeleting(true);
                    setTimeout(() => {
                      setDeleting(false);
                      toast.success("Товар видалено із кошика");
                      removeFromCart(id);
                    }, 300);
                  }
                  updCount(id, count - 1);
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
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="text-xs font-semibold text-slate-400">
                {count}
              </span>
              <button
                onClick={async () => {
                  if (total_count == count) {
                    return toast.error("Товару більше немає на складі");
                  }
                  updCount(id, count + 1);
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
            </div>
          </div>
          <div className="flex items-center flex-col gap-y-1">
            <span className="text-xs font-semibold text-slate-600">Сумма</span>
            <span className="text-xs font-semibold text-slate-400">
              {price}.00 UAH
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setDeleting(true);
          setTimeout(() => {
            setDeleting(false);
            toast.success("Товар видалено із кошика");
            removeFromCart(id);
          }, 300);
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
    // <div className="flex items-center justify-between gap-x-2 p-2 border-2 border-slate-100 rounded-md">
    //   <div className="w-14 h-14 relative hidden sm:block">
    //     <Image
    //       src={img}
    //       layout="fill"
    //       objectFit="cover"
    //       quality={100}
    //       alt="Image"
    //     />
    //   </div>
    //   <div className="flex items-start flex-col gap-y-1">
    //     <span className="text-xs truncate font-semibold max-w-36 sm:max-w-full text-nowrap text-slate-600">
    //       {name}
    //     </span>
    //     <span className="text-xs font-semibold text-slate-400">{type}</span>
    //   </div>
    //   <div className="flex items-center flex-col gap-y-1">
    //     <span className="text-xs font-semibold text-slate-600">Кількість</span>
    //     <span className="text-xs font-semibold text-slate-400">{count}</span>
    //   </div>
    //   <div className="flex items-center flex-col gap-y-1">
    //     <span className="text-xs font-semibold text-slate-600">Сумма</span>
    //     <span className="text-xs font-semibold text-slate-400">{price}</span>
    //   </div>
    //   <button
    //     onClick={() => {
    //       setDeleting(true);
    //       setTimeout(() => {
    //         setDeleting(false);
    //         toast.success("Товар видалено із кошика");
    //         removeFromCart(id);
    //       }, 300);
    //     }}
    //     className="w-fit h-fit p-2 bg-red-500 rounded-md hover:bg-red-700 transition-colors"
    //   >
    //     {deleting ? (
    //       <div className="w-fit h-fit animate-spin">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="white"
    //           className="size-4"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    //           />
    //         </svg>
    //       </div>
    //     ) : (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="white"
    //         className="size-4"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    //         />
    //       </svg>
    //     )}
    //   </button>
    // </div>
  );
}
