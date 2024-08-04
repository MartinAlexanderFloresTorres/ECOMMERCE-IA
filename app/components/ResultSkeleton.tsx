export default function ResultSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="animate-pulse h-5 w-1/2 bg-sky-100 bg-opacity-10 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-sky-100 bg-opacity-10 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-sky-100 bg-opacity-10 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-sky-100 bg-opacity-10 rounded-md"></div>
      </div>

      <div className="flex gap-3">
        <div className="animate-pulse h-5 w-1/2 bg-sky-100 bg-opacity-10 rounded-md"></div>
        <div className="animate-pulse h-5 w-full bg-sky-100 bg-opacity-10 rounded-md"></div>
      </div>
    </div>
  );
}
