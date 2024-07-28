"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Preloader from "../../Preloader";
export default function Hero() {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {});
  const textAnim = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.2,
      },
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

  return (
    <section className="w-full min-h-screen lg:min-h-screen flex flex-col justify-around gap-y-4 pb-8 pt-20 lg:pt-24 overflow-x-hidden max-w-6xl mx-auto ">
      <ReactPlayer
        url={"/assets/hero_video.mov"}
        width={"100%"}
        height={"100%"}
        playing={true}
        loop={true}
        muted={true}
        onReady={() => setReady(true)}
        controls={false}
        playsinline={true}
        style={{
          borderRadius: "6px",
        }}
      />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        className="flex flex-col  px-2 lg:px-8 lg:w-1/2 lg:ml-auto gap-y-2"
      >
        <motion.h1
          variants={textAnim}
          className="font-semibold text-slate-600 text-4xl pacifico.classname pacifico-regular"
        >
          BestWishes <br />
          Народжені щоб дарувати якість
        </motion.h1>
        <motion.span
          variants={textAnim}
          className="font-semibold text-slate-500 text-base pacifico-regular"
        >
          Оберіть свій стиль
        </motion.span>
        <motion.div
          whileHover={{ scale: 1.2 }}
          variants={linkAnim}
          className="w-fit h-fit ml-auto"
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
              Перейти
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
