function SkeletonHero() {
  return (
    <div
      role="status"
      className="hero grid grid-cols-1 md:grid-cols-2 pt-6 items-center gap-6 animate-pulse"
    >
      {/* Left */}
      <div className="ml-6">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-72 p-4 rounded-2xl">
          <div className="w-10 h-10 rounded-md bg-zinc-700"></div>
          <div className="h-4 w-48 bg-zinc-700 rounded-full"></div>
        </div>

        <div className="h-8 w-96 bg-zinc-700 rounded-full mb-4"></div>
        <div className="h-8 w-72 bg-zinc-700 rounded-full mb-6"></div>

        <div className="h-3 bg-zinc-700 rounded-full mb-3"></div>
        <div className="h-3 bg-zinc-700 rounded-full mb-3"></div>
        <div className="h-3 w-4/5 bg-zinc-700 rounded-full mb-6"></div>

        <div className="flex gap-4">
          <div className="h-14 w-40 bg-zinc-700 rounded-2xl"></div>
          <div className="h-14 w-40 bg-zinc-700 rounded-2xl"></div>
        </div>
      </div>

      {/* Right image */}
      <div className="flex justify-center md:justify-end mr-6">
        <div className="w-[500px] h-[500px] bg-zinc-700 rounded-3xl"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default SkeletonHero;