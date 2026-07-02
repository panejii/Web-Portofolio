function SkeletonNavbar() {
  return (
    <div
      role="status"
      className="navbar py-7 px-6 flex items-center justify-between animate-pulse"
    >
      <div className="h-8 w-40 bg-zinc-700 rounded-lg"></div>

      <div className="flex gap-6 ">
        <div className="h-5 w-20 bg-zinc-700 rounded-full"></div>
        <div className="h-5 w-20 bg-zinc-700 rounded-full"></div>
        <div className="h-5 w-20 bg-zinc-700 rounded-full"></div>
        <div className="h-5 w-20 bg-zinc-700 rounded-full"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default SkeletonNavbar;