import Image from "next/image";
import Link from "next/link";
export default function Benefits() {
  return (
    <section className="w-full h-screen flex flex-col justify-around gap-y-4 px-2 pb-8 pt-4 ">
      <div className="w-full h-2/3 relative">
        <Image
          src={"/assets/hero_glob.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
        />
        <span className="text-base font-semibold text-white absolute top-4 left-1/2 -translate-x-1/2">
          LOGO
        </span>
        <span className="text-base font-semibold text-white absolute bottom-4 left-1/2 -translate-x-1/2">
          CompanyName
        </span>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="pacifico-regular text-2xl font-semibold text-slate-600">
          Краса натхненна реальним життям
        </h4>
        <span className="text-sm font-semibold text-slate-400">
          CompanyName - це новий підхід до краси <br />
          Це про свободу та догляд і любов до себе <br />
          Продукти для підтримки вашого комфорту і краси
        </span>
        <Link
          className="border-slate-200 border rounded-full h-20 w-20 relative flex items-center justify-normal ml-auto hover:text-slate-500 hover:border-slate-500 transition-all hover:shadow-sm hover:shadow-slate-500"
          href={"/"}
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
      </div>
    </section>
  );
}
