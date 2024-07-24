"use client";

import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function DescriptionBlock({
  compound,
  method,
}: {
  compound: string;
  method: string;
}) {
  const [slide, setSlide] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      <div
        onClick={() => setSlide(false)}
        className={classNames(
          "flex items-center justify-center text-sm font-semibold rounded-md p-1 hover:bg-slate-100 cursor-pointer",
          {
            "text-slate-400": slide,
            "text-slate-600": !slide,
          }
        )}
      >
        Склад
      </div>
      <div
        onClick={() => setSlide(true)}
        className={classNames(
          "flex items-center justify-center text-sm font-semibold p-1 hover:bg-slate-100 cursor-pointer rounded-md",
          {
            "text-slate-400": !slide,
            "text-slate-600": slide,
          }
        )}
      >
        Спосіб використання
      </div>
      <div className="col-span-2 text-xs font-semibold text-slate-400 leading-5">
        {slide ? method : compound}
      </div>
      <div className="flex items-center justify-center gap-1 w-full col-span-2 mt-2 border-y border-y-slate-100 py-5">
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
    </div>
  );
}
