import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function ProductsTemplate() {
  return (
    <section className="flex flex-col gap-y-2 p-2 pt-28">
      <Link
        href={"/"}
        className="inline-flex items-center gap-x-1 text-slate-400 font-semibold text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#a2b4ca"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Назад
      </Link>
      <h2 className="text-2xl font-semibold text-slate-600 text-center">
        Каталог
      </h2>
      <div className="w-full flex items-center gap-x-1 border border-slate-100 pr-3">
        <input
          type="text"
          placeholder="Пошук"
          className="w-full rounded-md border-none focus:outline-none focus:ring-0 focus:border-none placeholder:text-slate-400 text-slate-500 font-semibold text-sm"
        />
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-2 my-2 w-full h-full">
        <ProductCard
          img={"/assets/test_1.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_2.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_2.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_1.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_1.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_2.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_2.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
        <ProductCard
          img={"/assets/test_1.jpg"}
          price={1200}
          title={"Title"}
          type={"type"}
        />
      </div>
    </section>
  );
}
