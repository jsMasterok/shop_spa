"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import useSWR from "swr";
import Preloader from "../components/Preloader";
import { motion } from "framer-motion";
import { CRM_BASE_ROUTE } from "../utils/constants";
import { getWishes } from "../utils/api";
import { useState } from "react";

export default function ProductsTemplate() {
  const { data, isLoading } = useSWR(`${CRM_BASE_ROUTE}/products`, getWishes);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const cardAnim = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.24 },
    }),
  };

  if (isLoading) return <Preloader />;

  return (
    <section className="flex flex-col gap-y-2 p-2 lg:px-8 pt-28 max-w-6xl mx-auto">
      <Link
        href={"/"}
        className="inline-flex items-center gap-x-1 text-slate-400 font-semibold text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#a2b4ca"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Назад
      </Link>
      <h2 className="text-2xl font-semibold text-slate-600 text-center">
        Каталог
      </h2>
      <div className="w-full flex items-center gap-x-1 border border-slate-100 pr-3">
        <input
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border-none focus:outline-none focus:ring-0 focus:border-none placeholder:text-slate-400 text-slate-500 font-semibold text-sm"
        />
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 my-2 w-full h-full">
        {data
          ?.filter((product: any) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product: any, index: any) => {
            return (
              <motion.div
                whileHover={{ scale: 1.04 }}
                variants={cardAnim}
                custom={index + 1}
                key={product._id}
                className="cursor-pointer"
              >
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.variations[0].price}
                  type={product.category.title}
                  img={product.attachments[0].url}
                  total_count={product.variations[0].availableQuantity}
                  variationsId={product.variations[0].id}
                />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
