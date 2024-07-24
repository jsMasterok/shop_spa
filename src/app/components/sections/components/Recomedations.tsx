"use client";
import Link from "next/link";
import ProductCard from "../../../products/components/ProductCard";
import useSWR from "swr";
import { API } from "@/app/utils/constants";
import { fetcher } from "@/app/utils/apiClient";

export default function Recomedations() {
  const { data, isLoading, error, mutate } = useSWR(`${API}/products`, fetcher);
  console.log(data);

  if (!data || isLoading) return;

  return (
    <section className="w-full min-h-screen flex flex-col justify-around gap-y-4 px-2 pb-8 pt-4 ">
      <div className="flex flex-col gap-y-1 items-start">
        <h2 className="pacifico-regular font-semibold text-slate-600 text-2xl">
          Наші рекомендації
        </h2>
        <Link
          href={"/products"}
          className="text-sm hover:underline text-slate-400 font-semibold inline-flex items-center gap-x-1"
        >
          Дивитись усі
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        {data.slice(0, 4).map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.images[0]}
              price={item.price}
              title={item.name}
              type={item.type}
            />
          );
        })}
      </div>
    </section>
  );
}
