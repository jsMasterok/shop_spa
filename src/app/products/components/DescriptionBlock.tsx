"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DescriptionBlock({
  compound,
  method,
}: {
  compound: string;
  method: string;
}) {
  const [slide, setSlide] = useState<number>(0);
  const menuData = ["Склад", " Спосіб використання"];
  return (
    <>
      <div className="flex items-center justify-start gap-x-2 my-4">
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isSelected={slide === index}
            handleClick={() => setSlide(index)}
          />
        ))}
      </div>
      <AnimatePresence>
        {slide === 0 && (
          <motion.p
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="leading-5 font-semibold text-sm text-slate-400"
          >
            {method}
          </motion.p>
        )}
        {slide === 1 && (
          <motion.p
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="leading-5 font-semibold text-sm text-slate-400"
          >
            {compound}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );

  function MenuItem({
    isSelected,
    item,
    handleClick,
  }: {
    isSelected: boolean;
    item: string;
    handleClick: () => void;
  }) {
    return (
      <motion.div
        onClick={handleClick}
        initial={{
          color: "#b3bbca",
        }}
        animate={{
          color: isSelected ? "#4e5c6c" : "#b3bbca",
        }}
        className=" p-2 w-fit cursor-pointer font-semibold text-base"
      >
        {item}
        {isSelected && <ActiveLine />}
      </motion.div>
    );
  }

  function ActiveLine({}) {
    return (
      <motion.div
        className="w-full h-1 bg-slate-600 rounded-md"
        layoutId="activeItem"
      ></motion.div>
    );
  }
}
