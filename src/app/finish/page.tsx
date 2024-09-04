"use client";

import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";
import { useCart, useFinish } from "../utils/store";
import { useRouter } from "next/navigation";
import { useCopyToClipboard } from "usehooks-ts";
import toast from "react-hot-toast";

export default function Finish() {
  const router = useRouter();
  const data = useCart((state: any) => state.items);
  const removeAll = useCart((state: any) => state.removeAll);

  const [copiedText, copy] = useCopyToClipboard();

  const totalPrice = data.reduce((sum: any, item: any) => sum + item.price, 0);
  const orderId = useFinish((state: any) => state.order_id);
  const resetId = useFinish((state: any) => state.resetOrderId);

  console.log(orderId);

  const formattedPrice = new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
  }).format(totalPrice);

  if (data.length < 1) return router.push("/");
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center gap-y-4 px-2 pb-8 pt-28 lg:px-8 lg:max-w-6xl mx-auto relative overflow-hidden">
      <Confetti width={1280} height={1000} recycle={false} className="top-28" />
      {/* <div className="w-full flex h-72 flex-1 border max-w-lg mx-auto relative">
        <span className="text-lg font-semibold text-white absolute z-10 top-10 left-1/2 -translate-x-1/2">
          <Image
            src={"/assets/logo_white.svg"}
            width={100}
            height={100}
            alt="LOGO"
            quality={100}
          />
        </span>
        <Image
          src={"/assets/finish_1.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
          quality={100}
        />
        <span className="text-lg font-semibold text-white absolute z-10 bottom-10 left-1/2 -translate-x-1/2 pacifico-regular">
          BestWishes
        </span>
      </div> */}
      <h3 className="text-2xl font-semibold text-slate-600">
        Дякуємо за замовлення !
      </h3>
      <div className="my-2 w-full flex flex-col gap-y-2 max-w-xl mx-auto">
        <div className="h-fit w-full p-2 border border-slate-100 grid grid-cols-12 gap-y-3">
          <div className="col-span-12">
            <span className=" text-center w-full flex items-center justify-center mb-2 text-sm font-semibold text-slate-400 ">
              Ваш чек, замовлення №{orderId}
            </span>
          </div>
          <div className="col-span-6 text-xs font-semibold text-slate-400">
            Товар
          </div>
          <div className="col-span-2 text-xs font-semibold text-slate-400">
            Кількість
          </div>
          <div className="col-span-2 text-xs font-semibold text-slate-400">
            Ціна
          </div>
          <div className="col-span-2 text-xs font-semibold text-slate-400">
            Сума
          </div>
          {data.map((item: any, index: number) => {
            return (
              <div
                className="w-full grid col-span-12 grid-cols-12 gap-y-3"
                key={index}
              >
                <div className="col-span-6 text-xs font-semibold text-slate-400 border-b border-b-slate-500 border-dashed pb-1">
                  {item.title}
                </div>
                <div className="col-span-2 text-xs font-semibold text-slate-400 border-b border-b-slate-500 border-dashed pb-1 pl-2">
                  {item.quantity}
                </div>
                <div className="col-span-2 text-xs font-semibold text-slate-400 border-b border-b-slate-500 border-dashed pb-1">
                  {item.initial_price}
                </div>
                <div className="col-span-2 text-xs font-semibold text-slate-400 border-b border-b-slate-500 border-dashed pb-1">
                  {item.price}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-2 text-slate-500 font-semibold">
          <h3>Всього до сплати:</h3>
          <span>{formattedPrice}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 my-2 w-full max-w-xl mx-auto">
        <span className=" text-center w-full flex items-center justify-center mb-2 text-sm font-semibold text-slate-400 ">
          Деталі для оплати
        </span>
        <span className="text-slate-500 text-base font-semibold">
          {" "}
          Отримувач:<b>ФОП Лапко Таїсія Володимирівна</b>
        </span>
        <span
          className="text-slate-500 text-base font-semibold underline inline-flex items-center cursor-pointer underline-offset-4"
          onClick={() => {
            copy("UA043220010000026006340136912").then(() =>
              toast.success("IBAN успішно зкопійований")
            );
          }}
        >
          IBAN:
          <b>UA043220010000026006340136912</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </span>
        <span className="text-slate-500 text-base font-semibold">
          {" "}
          ІПН/ЄДРПОУ:<b>3885600265</b>
        </span>
        <span className="text-start w-full flex items-center justify-center mb-2 text-sm font-semibold text-slate-400 ">
          Після оплати ми автоматично отримаємо сповіщення у нашій системі,також
          буде автоматично створено ТТН,який ви отримаєте в СМС повідомленні
        </span>
        <span className="text-start w-full flex items-center justify-center mb-2 text-sm font-semibold text-red-500 border border-red-500 p-2 rounded-md">
          При оплаті через банківський додаток,обов&apos;язково вкажіть: <br />
          {"(Оплата за товар,та номер замовлення,який вказаний у чеку)"} <br />
          Після цього натисніть кнопку {"(Сплачено)"}
        </span>
      </div>
      <Link
        className="w-full lg:max-w-lg mx-auto flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
        href={"/"}
      >
        Cплачено
      </Link>
      <div className="flex items-center justify-center gap-1 w-full col-span-2">
        <span className="text-base font-semibold text-slate-400">
          Залишити відгук в
        </span>
        <button
          onClick={() => {
            removeAll();
            resetId();
            router.push("/");
          }}
          className="text-base font-semibold text-slate-600 underline uppercase"
        >
          Instagram
        </button>
      </div>
    </section>
  );
}
