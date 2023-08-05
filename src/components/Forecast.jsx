import { useEffect } from "react";
import { useState } from "react";
import { useWeather } from "../customHooks/useWeather";
import { temp } from "../functions/functions";


export function Forecast() {
  const { currentCityData, dispatch,API_KEY } = useWeather();
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${currentCityData.id}&appid=${API_KEY}`
        );
        const data = await res.json();
        setForecast(
          data.list.filter((_, index) => {
            return index % 8 === 0;
          })
        );
      } catch (error) {
        dispatch({ type: "error/set", payload: error.message });
      }
    }
    fetchData();
  }, [currentCityData.id, dispatch]);
  return (
    <>
      <div className="p-1 text-xl">
        <p>The Next 5 Days Forecast</p>
      </div>
      {currentCityData.cod !== "404" && forecast && (
        <div>
          <div className="p-5">
            <div>
              <ul className="flex flex-col gap-1">
                {forecast &&
                  forecast.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="flex justify-between p-1 items-center">
                          <div>
                            <img
                              className="w-8"
                              src={`https://openweathermap.org/img/wn/${
                                currentCityData.cod !== "404" &&
                                item.weather.at(0).icon
                              }@2x.png`}
                            />
                          </div>
                          <div className="flex flex-col">
                            <span>{item.dt_txt.slice(0, 10)}</span>
                            <span>{item.weather.at(0).main}</span>
                            <span>{item.weather.at(0).main}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span>min : {temp(item.main.temp_min)}°C</span>
                            <span>max : {temp(item.main.temp_max)}°C</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
