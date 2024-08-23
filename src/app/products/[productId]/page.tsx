"use client";

import Link from "next/link";
import ImageSlider from "../components/ImageSlider";
import PriceBlock from "../components/PriceBlock";
import useSWR from "swr";
import Preloader from "@/app/components/Preloader";
import { usePathname, useRouter } from "next/navigation";
import { CRM_BASE_ROUTE } from "@/app/utils/constants";
import fetcherSWR from "@/app/utils/fetcherSWR";

export default function ProductPage() {
  const path = usePathname();
  const router = useRouter();
  const id = path.split("products/")[1];
  const { data, isLoading, error, mutate } = useSWR(
    `${CRM_BASE_ROUTE}/products/${id}`,
    fetcherSWR
  );
  if (isLoading) return <Preloader />;
  if (!data) router.push("/");
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
      <ImageSlider images={data.attachments} />
      <span className="text-base font-semibold text-slate-400">
        {data.category.title}
      </span>
      <h2 className="text-2xl font-semibold text-slate-600">{data.title}</h2>
      <PriceBlock
        id={data.id}
        price={data.variations[0].price}
        totalCount={data.variations[0].availableQuantity}
        img={data.attachments[0].url}
        type={data.category.title}
        name={data.title}
      />
      <p
        className="text-pretty text-slate-400 text-base font-semibold"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <div className="flex flex-col gap-y-2 sm:gap-y-3 my-5 text-sm text-slate-400">
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Виробник:<b>ТМ 73 best wishes</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Сайт:
          <b>
            <Link href={"https://bw73.com.ua"}>bw73.com.ua</Link>
          </b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Електронна адреса для зв’язку:
          <b>
            <Link href={"mailto:bwishes7373@gmail.com"}>
              bwishes7373@gmail.com
            </Link>
          </b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Instagram:
          <b>
            <Link href={"https://instagram.com/bbestwisshes"}>
              @bbestwisshes
            </Link>
          </b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Вироблено:<b>відповідно до ТУ: У 20.4-44197216-001:2021</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Країна виробництва:<b>Україна</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Дата виготовлення та номер партії:<b>див. на упаковці</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Термін придатності:<b>12 місяців</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Адреса виробничих потужностей:
          <b>Україна, 02093, м. Київ, вул. Бориспільска, 9</b>
        </span>
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Умови зберігання:
          <b>
            Зберігати при температурі не нижче 5 °С і не вище 25 °С, при
            відсутності безпосереднього впливу сонячного світла
          </b>
        </span>{" "}
        <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
          Запобіжні заходи:
          <b className=" sm:text-center">
            тільки для зовнішнього застосування. Уникати потрапляння в очі.
            Зберігати окремо від харчових продуктів в недоступному для дітей та
            домашніх тварин місці.
          </b>
        </span>{" "}
      </div>
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
