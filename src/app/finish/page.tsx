"use client";

import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";

export default function page() {
  return (
    <section className="w-full min-h-screen h-screen flex flex-col items-center justify-center gap-y-4 px-2 pb-8 pt-28 lg:px-8 lg:max-w-6xl mx-auto relative overflow-hidden">
      <Confetti width={1280} height={1000} recycle={false} className="top-28"/>
      <div className="w-full flex flex-1 border max-w-lg mx-auto relative">
        <span className="text-lg font-semibold text-white absolute z-10 top-10 left-1/2 -translate-x-1/2">
          <Image
            src={"/assets/logo_white.svg"}
            width={100}
            height={100}
            alt="LOGO"
          />
        </span>
        <Image
          src={"/assets/finish_1.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
        />
        <span className="text-lg font-semibold text-white absolute z-10 bottom-10 left-1/2 -translate-x-1/2 pacifico-regular">
          BestWishes
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-slate-600">
        Дякуємо за замовлення !
      </h3>
      <Link
        className="w-full lg:max-w-lg mx-auto flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
        href={"/"}
      >
        На головну
      </Link>
      <span className="text-sm font-semibold text-slate-400">Або</span>
      <div className="flex items-center justify-center gap-1 w-full col-span-2">
        <span className="text-base font-semibold text-slate-400">
          Залишити відгук в
        </span>
        <Link
          href={"/"}
          className="text-base font-semibold text-slate-600 underline uppercase"
        >
          Instagram
        </Link>
      </div>
    </section>
  );
}
