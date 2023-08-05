export function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-auto text-center flex flex-col justify-center items-center gap-5">
        <h1 className="text-9xl text-gray-300">Loading...</h1>
        <p className="text-3xl text-gray-400">
          if loading goes for long time . please check your internet connection!
        </p>
      </div>
    </div>
  );
}
