import Link from "next/link";
import ProductCard from "../../../products/components/ProductCard";

export default function Recomedations() {
  return (
    <section className="w-full h-screen flex flex-col justify-around gap-y-4 px-2 pb-8 pt-4 ">
      <div className="flex flex-col gap-y-1 items-start">
        <h2 className="pacifico-regular font-semibold text-slate-600 text-2xl">
          Наші рекомендації
        </h2>
        <Link
          href={""}
          className="text-sm hover:underline text-slate-400 font-semibold inline-flex items-center gap-x-1"
        >
          Дивитись усі
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <ProductCard img={'/assets/test_1.jpg'} price={1200} title={"Title"} type={"type"} />
        <ProductCard img={'/assets/test_2.jpg'} price={1200} title={"Title"} type={"type"} />
        <ProductCard img={'/assets/test_2.jpg'} price={1200} title={"Title"} type={"type"} />
        <ProductCard img={'/assets/test_1.jpg'} price={1200} title={"Title"} type={"type"} />
      </div>
    </section>
  );
}
