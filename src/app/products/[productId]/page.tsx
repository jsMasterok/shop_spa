"use client";

import Link from "next/link";
import ImageSlider from "../components/ImageSlider";
import PriceBlock from "../components/PriceBlock";
import DescriptionBlock from "../components/DescriptionBlock";
import useSWR from "swr";
import { fetcher } from "@/app/utils/apiClient";
import { API } from "@/app/utils/constants";
import ProductPageSkeleton from "@/app/components/skeletons/ProductPageSkeleton";
import Preloader from "@/app/components/Preloader";

export default function ProductPage() {
  const { data, isLoading, error, mutate } = useSWR(
    `${API}/products/1`,
    fetcher
  );

  if (isLoading || !data) return <Preloader />;
  return (
    <section className="w-full min-h-screen flex flex-col gap-y-2 px-2 pb-8 pt-28 lg:px-8 max-w-6xl mx-auto">
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
      <ImageSlider images={data.images} />
      <h2 className="text-2xl font-semibold text-slate-600">{data.name}</h2>
      <span className="text-base font-semibold text-slate-400">
        {data.type}
      </span>
      <PriceBlock
        id={data.id}
        price={data.price}
        totalCount={data.total_count}
        img={data.images[0]}
        type={data.type}
        name={data.name}
      />
      <DescriptionBlock compound={data.compound} method={data.method} />
      <div className="flex flex-col gap-8 items-center lg:flex-row lg:gap-0 lg:justify-between mt-4 lg:mt-8">
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-lg font-semibold text-slate-500">
            Доставка товарів
          </span>
          <span className="text-base font-semibold text-slate-400">
            Зручним для вас способом
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-lg font-semibold text-slate-500">
            Консультація професіоналів
          </span>
          <Link
            href={"/"}
            className="text-base underline font-semibold text-slate-400"
          >
            Instagram
          </Link>
        </div>
        <span className="text-lg font-semibold text-slate-500">
          Тільки якісна косметика
        </span>
      </div>
    </section>
  );
}
