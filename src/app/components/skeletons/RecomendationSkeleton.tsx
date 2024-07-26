export default function RecomendationSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full p-2 lg:px-8 lg:max-w-3xl mx-auto">
      <div className="w-full h-full flex flex-1">
        <div className="flex flex-col w-full gap-y-2 justify-between">
          <div className="w-full flex h-48 rounded-md relative bg-slate-200 animate-pulse"></div>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-1/2 p-2 bg-slate-200 rounded-md animate-pulse"></span>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex flex-col w-full gap-y-2 justify-between">
          <div className="w-full flex h-48 rounded-md relative bg-slate-200 animate-pulse"></div>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-1/2 p-2 bg-slate-200 rounded-md animate-pulse"></span>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex flex-col w-full gap-y-2 justify-between">
          <div className="w-full flex h-48 rounded-md relative bg-slate-200 animate-pulse"></div>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-1/2 p-2 bg-slate-200 rounded-md animate-pulse"></span>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex flex-col w-full gap-y-2 justify-between">
          <div className="w-full flex h-48 rounded-md relative bg-slate-200 animate-pulse"></div>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-full p-2 bg-slate-200 rounded-md animate-pulse"></span>
          <span className="w-1/2 p-2 bg-slate-200 rounded-md animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
