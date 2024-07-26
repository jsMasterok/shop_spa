export default function ProductPageSkeleton() {
  return (
    <section className="w-full h-screen flex flex-col justify-between gap-y-4 px-2 pb-8 pt-28 lg:px-8 mx-auto lg:max-w-3xl">
      <div className="w-full flex flex-1 rounded-md bg-slate-200 animate-pulse"></div>
      <span className="w-full p-2 rounded-md bg-slate-200 animate-pulse my-4"></span>
      <span className="w-full p-2 rounded-md bg-slate-200 animate-pulse"></span>
      <span className="w-full p-2 rounded-md bg-slate-200 animate-pulse"></span>
      <span className="w-full p-6 my-2 rounded-md bg-slate-200 animate-pulse"></span>
    </section>
  );
}
