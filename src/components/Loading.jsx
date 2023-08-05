import { memo } from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center font-Edu-SA">
      <div className="w-auto text-center flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl md:text-8xl text-gray-300 animate-pulse p-10">Loading...</h1>
        <p className="text-1xl text-gray-400">
          fetch weather data from server
        </p>
        <p className="text-1xl text-gray-400">
          if loading time is very long , check your internet connection and refresh the page!
        </p>
      </div>
    </div>
  );
}
export default memo(Loading);