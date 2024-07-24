import Link from "next/link";

export default function page() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-y-4 px-2 pb-8 pt-28">
      <h3 className="text-2xl font-semibold text-slate-600">
        Дякуємо за замовлення !
      </h3>
      <Link
        className="w-full flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
        href={"/"}
      >
        На головну
      </Link>
      <span className="text-sm font-semibold text-slate-400">Або</span>
      <div className="flex items-center justify-center gap-1 w-full col-span-2">
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
    </section>
  );
}
