import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-around gap-y-4 px-2 pb-8 pt-28 ">
      <div className="flex w-full items-center justify-center h-1/2 relative gap-4">
        <div className="w-2/3 h-full relative rounded-md">
          <Image
            src={"/assets/girl_2.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-md"
          />
        </div>
        <div className="w-2/3 h-5/6 relative rounded-md">
          <Image
            src={"/assets/hero_cr.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-md"
          />
        </div>
        <div className="w-28 h-28 left-1/2 -translate-x-1/2 bottom-3 absolute z-10 rounded-md">
          <Image
            src={"/assets/girl_1.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-semibold text-slate-600 text-4xl pacifico.classname pacifico-regular">
          Народжені щоб дарувати якість
        </h1>
        <span className="font-semibold text-slate-500 text-base pacifico-regular">
          Оберіть свій стиль
        </span>
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
      </div>
    </section>
  );
}
