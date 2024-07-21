import Image from "next/image";

export default function ProductCard({ img, title, price, type }) {
  return (
    <div className="w-full h-full flex flex-1 shadow-md p-2 rounded-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col w-full gap-y-2 justify-between">
        <div className="w-full h-2/3 rounded-md relative">
          <Image
            src={"/assets/hero_1.jfif"}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-sm text-slate-500">{title}</h4>
          <span className="text-xs text-slate-400">{type}</span>
          <span className="text-xs text-slate-400">{price} UAH</span>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-x-1 text-center text-sm font-semibold text-slate-400 rounded-md bg-slate-200 py-2"
          >
            Додати в кошик{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
