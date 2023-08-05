import { memo, useState } from "react";
import { useWeather } from "../customHooks/useWeather";
function Search() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const { handleSubmit, searchQuery, dispatch } = useWeather();
  return (
    <>
      <div className="relative">
        <div className={`absolute left-2 top-2 opacity-10 ${isHovering?"opacity-100":""}`}>
          <div className="relative">
            <div className={`w-20 absolute left-[-100%] top-[90%] bg-white text-gray-800 rounded-lg text-center hidden${isHovering?"block":""}`}>
              <p>save this location</p>
            </div>
            <button
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => {
                window.localStorage.setItem(
                  "city",
                  JSON.stringify(searchQuery)
                );
              }}
            >
              <box-icon name="location-plus" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
        <button
          disabled={searchQuery.length < 1 ? true : false}
          className="absolute right-2 top-2 inline-flex justify-center items-center"
          onClick={handleSubmit}
        >
          <box-icon name="search-alt" rotate="90" color="#ffffff"></box-icon>
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchQuery) handleSubmit();
          }}
        >
          <input
            type="text"
            className="w-full h-8 rounded text-white bg-white bg-opacity-5 text-center text-xl p-5"
            placeholder="Enter a city name!"
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
export default memo(Search);
