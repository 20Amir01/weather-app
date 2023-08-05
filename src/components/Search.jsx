import { useWeather } from "../customHooks/useWeather";

export function Search() {
  const { handleSubmit, searchQuery, dispatch } = useWeather();
  return (
    <>
      <div className="relative">
        <span className="absolute left-0 top-2">
          <box-icon name="location-plus" color="#ffffff"></box-icon>
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            className="w-full h-8 rounded text-white bg-white bg-opacity-5 text-center text-xl p-5"
            placeholder="Enter your city name"
            value={searchQuery}
            onChange={(e) => {
              dispatch({ type: "city/set", payload: e.target.value });
            }}
          />
        </form>
      </div>
    </>
  );
}
