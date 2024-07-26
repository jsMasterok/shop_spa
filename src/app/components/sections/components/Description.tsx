"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Description() {
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"visible"}
      className="w-full h-screen flex flex-col gap-y-4 px-2 pb-8 lg:px-8 pt-4 max-w-6xl mx-auto"
    >
      <motion.h3
        variants={animation}
        custom={1}
        className="text-2xl lg:w-1/2 ml-auto font-semibold text-slate-600 text-center pacifico-regular"
      >
        Важлива особливість догляду за шкірою бренду <span>BestWishes</span> –
        індивідуальність та системність.
      </motion.h3>
      <motion.span
        variants={animation}
        custom={1.2}
        className="text-sm font-semibold text-slate-400 text-center relative z-10 lg:w-1/2 lg:ml-auto top-8 lg:top-0 bg-white bg-opacity-30 lowercase"
      >
        ПЕРСОНАЛЬНА РЕКОМЕНДАЦІЯ ВІДПОВІДНО ДО ВАШОГО ВІКУ, ТИПУ ШКІРИ ТА ЇЇ
        ОСОБЛИВОСТЕЙ, СИНЕРГІЯ ПРОДУКТІВ ТА РЕГУЛЯРНІСТЬ ЇХ ЗАСТОСУВАННЯ, У
        НАЙКОРОТШИЙ ТЕРМІН ЗАБЕЗПЕЧАТЬ ВИДИМИЙ РЕЗУЛЬТАТ!
      </motion.span>
      <motion.div
        variants={animation}
        custom={1.4}
        className="relative w-full flex flex-1 -top-10 lg:top-0 z-0 lg:w-1/2 lg:h-44 lg:mr-auto"
      >
        <Image
          src={"/assets/desc_1.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
        />
        <motion.span
          variants={animation}
          custom={1.6}
          className="text-base font-semibold text-slate-400 absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <Image
            src={"/assets/logo_dark.svg"}
            width={100}
            height={100}
            alt="img"
          />
        </motion.span>
      </motion.div>
    </motion.section>
  );
}
