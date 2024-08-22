"use client";
import Link from "next/link";
import ProductCard from "../../../products/components/ProductCard";
import useSWR from "swr";
import { API, BW_API } from "@/app/utils/constants";
import { fetcher } from "@/app/utils/apiClient";
import { motion } from "framer-motion";
import RecomendationSkeleton from "../../skeletons/RecomendationSkeleton";
import { useMediaQuery } from "usehooks-ts";
import Preloader from "../../Preloader";

export default function Recomedations() {
  const { data, isLoading, error, mutate } = useSWR(
    `${BW_API}/wishes`,
    fetcher
  );
  const cardAnim = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.24 },
    }),
  };

  const laptop = useMediaQuery("(min-width:1024px");
  const slice = laptop ? 6 : 4;

  if (isLoading) return <Preloader />;

  return (
    <motion.section
      whileInView={"visible"}
      initial={"hidden"}
      className="w-full min-h-screen flex flex-col justify-around gap-y-4 px-2 lg:px-8 pb-8 pt-4 max-w-6xl mx-auto"
    >
      <div className="flex flex-col gap-y-1 items-start">
        <h2 className="pacifico-regular font-semibold text-slate-600 text-2xl">
          Наші рекомендації
        </h2>
        <motion.div whileHover={{ scale: 1.1 }} className="w-fit">
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
        </motion.div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 w-full h-full">
        {data?.wishes.slice(0, slice).map((item: any, index: number) => {
          return (
            <motion.div
              whileHover={{ scale: 1.04 }}
              variants={cardAnim}
              custom={index + 1}
              key={item._id}
              className="cursor-pointer"
            >
              <ProductCard
                id={item._id}
                img={item.image}
                price={item.price}
                title={item.name}
                type={item.type}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
