"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentDate = new Date();
  return (
    <footer className="p-2 flex flex-col gap-2 items-center justify-center border-t border-slate-100 text-xs font-semibold text-slate-400">
      <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
        Електронна адреса для зв’язку:
        <b>
          <Link target="_blank" href={"mailto:bwishes7373@gmail.com"}>
            bwishes7373@gmail.com
          </Link>
        </b>
      </span>
      <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
        Instagram:
        <b>
          <Link target="_blank" href={"https://instagram.com/bbestwisshes"}>
            @bbestwisshes
          </Link>
        </b>
      </span>
      <span className="flex flex-col sm:inline-flex items-start sm:items-center gap-x-2">
        Адреса виробничих потужностей:
        <b>Україна, 02093, м. Київ, вул. Бориспільска, 9</b>
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
      <motion.div whileHover={{ scale: 1.1 }} className="w-fit my-4">
        <Link
          href={"/"}
          className="font-semibold text-base text-slate-400 my-2"
        >
          <Image
            src={"/assets/logo_dark.svg"}
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </motion.div>
      <span className="text-base font-semibold text-slate-400 hover:underline">
        © {currentDate.getFullYear()} BestWishes
      </span>
    </footer>
  );
}
