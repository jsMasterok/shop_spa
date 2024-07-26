import Image from "next/image";
import React from "react";

export default function Footer() {
  const currentDate = new Date();
  return (
    <footer className="p-2 flex flex-col gap-2 items-center justify-center border-t border-slate-100">
      <span className="font-semibold text-base text-slate-400 my-2">
        <Image
          src={"/assets/logo_dark.svg"}
          width={100}
          height={100}
          alt="logo"
        />
      </span>
      <a
        className="text-base font-semibold text-slate-400 hover:underline"
        href="tel:+38077777777"
      >
        +38 (077) 777 77 77
      </a>
      <a
        className="text-base font-semibold text-slate-400 hover:underline inline-flex gap-x-1 items-center"
        href="#"
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
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        instagram
      </a>
      <a
        className="text-base font-semibold text-slate-400 hover:underline"
        href="mailto:shop@test.com"
      >
        shop@test.com
      </a>
      <span className="text-base font-semibold text-slate-400 hover:underline">
        © {currentDate.getFullYear()} BestWishes
      </span>
      <a
        className="text-xs font-semibold text-slate-400 hover:underline mt-4"
        href="#"
      >
        Угода користувача
      </a>
      <a
        className="text-xs font-semibold text-slate-400 hover:underline"
        href="#"
      >
        Політика конфідеційності
      </a>
      <a
        className="text-xs font-semibold text-slate-400 hover:underline"
        href="#"
      >
        Доставка та оплата
      </a>
      <a
        className="text-xs font-semibold text-slate-400 hover:underline"
        href="#"
      >
        Публічна оферта
      </a>
    </footer>
  );
}
