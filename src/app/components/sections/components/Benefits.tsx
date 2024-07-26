"use client";

import Image from "next/image";
import Link from "next/link";
import { delay, motion } from "framer-motion";

export default function Benefits() {
  const textAnim = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const titleAnim = {
    hidden: {
      x: "200%",
    },
    visible: {
      x: 0,
      transition: { delay: 0.5 },
    },
  };

  const linkAnim = {
    hidden: {
      x: "150%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  const imgAnim = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"visible"}
      className="w-full overflow-x-hidden h-screen flex flex-col justify-around lg:justify-center gap-y-4 px-2 lg:px-8 pb-8 pt-4 max-w-6xl mx-auto"
    >
      <motion.div
        variants={imgAnim}
        className="w-full h-1/2 relative lg:w-1/2 ml-auto"
      >
        <Image
          src={"/assets/hero_glob.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
        />
        <motion.span
          variants={textAnim}
          custom={1.5}
          className="text-base font-semibold text-white absolute top-4 left-1/2 -translate-x-1/2"
        >
          <Image
            src={"/assets/logo_white.svg"}
            width={100}
            height={100}
            alt="img"
          />
        </motion.span>
        <motion.span
          variants={textAnim}
          custom={2}
          className="text-base font-semibold text-white absolute bottom-4 left-1/2 -translate-x-1/2 pacifico-regular"
        >
          BestWishes
        </motion.span>
      </motion.div>
      <div className="flex flex-col gap-y-2 lg:w-1/2">
        <motion.h4
          variants={titleAnim}
          className="pacifico-regular text-2xl font-semibold text-slate-600"
        >
          Краса натхненна реальним життям
        </motion.h4>
        <motion.span
          variants={titleAnim}
          className="text-sm font-semibold text-slate-400"
        >
          BestWishes - це новий підхід до краси <br />
          Це про свободу та догляд і любов до себе <br />
          Продукти для підтримки вашого комфорту і краси
        </motion.span>
        <motion.div
          whileHover={{ scale: 1.2 }}
          variants={linkAnim}
          className="ml-auto w-fit h-fit"
        >
          <Link
            className="border-slate-200 border rounded-full h-20 w-20 relative flex items-center justify-normal ml-auto hover:text-slate-500 hover:border-slate-500 transition-all hover:shadow-sm hover:shadow-slate-500"
            href={"/products"}
          >
            <span className="inline-flex gap-x-1 text-slate-400 text-xs font-semibold items-center absolute -left-3">
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              Каталог
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
