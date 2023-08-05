import { useWeather } from "../customHooks/useWeather";
import { temp } from "../functions/functions";
import  Search  from "../components/Search";
import  Time  from "../components/Time";
import  Forecast  from "../components/Forecast";
import  Line  from "../components/Line";


function WeatherAppPage() {
  const { currentCityData } = useWeather();
  return (
    <div className="flex flex-col md:flex-row w-full p-5">
      <div className="text-gray-400 w-full p-5 flex flex-col gap-10">
        <Time />
        <div>
          <div className="text-center flex flex-col gap-10 text-gray-200">
          <div className="flex flex-col gap-5">
              <h1 className="text-6xl md:text-9xl flex gap-5 justify-center items-center">
                <span className="capitalize">
                  {currentCityData.cod !== "404"
                    ? currentCityData.name
                    : "Not Found"}
                </span>
                <span className="text-2xl">
                  {currentCityData.cod !== "404" && currentCityData.sys.country}
                </span>
              </h1>
              <div className="text-5xl">
                <h1>
                  {currentCityData.cod !== "404" &&
                    currentCityData.weather.at(0).main}
                </h1>
              </div>
              <div className="text-3xl flex justify-center items-center">
                <h2>
                  {currentCityData.cod !== "404" &&
                    currentCityData.weather.at(0).description}
                </h2>
                <img
                  className="w-10"
                  src={`https://openweathermap.org/img/wn/${
                    currentCityData.cod !== "404" &&
                    currentCityData.weather.at(0).icon
                  }@2x.png`}
                />
              </div>
            </div>

            <Line />

            <div className="flex justify-center items-center gap-5">
              {currentCityData.cod !== "404" && (
                <>
                  <div>humidity:{currentCityData.main.humidity}</div>
                  <div>pressure :{currentCityData.main.pressure}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-5 text-gray-100 h-auto w-auto p-5 rounded text-center">
        <Search />
        <div className="flex-col md:w-60 p-7">
          <div className="text-7xl">
            <span>
              {currentCityData.cod !== "404" && temp(currentCityData.main.temp)}
            </span>
            <span>°C</span>
          </div>
          <div className="flex justify-between w-full p-1">
            <div>
              <span>min</span>:
              {currentCityData.cod !== "404" &&
                temp(currentCityData.main.temp_min)}
              <span>°C</span>
            </div>
            <div>
              <span>max</span>:
              {currentCityData.cod !== "404" &&
                temp(currentCityData.main.temp_max)}
              <span>°C</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span>Wind :</span>
            </div>
            <div>
              <span>
                {currentCityData.cod !== "404" && currentCityData.wind.deg}
              </span>
              <span>deg°</span>
            </div>
            <div>
              <span>
                {currentCityData.cod !== "404" &&
                  (currentCityData.wind.speed * 3.6).toFixed(1)}
              </span>
              <span>km/h</span>
            </div>
          </div>
        </div>
        <Line />
        <Forecast />
      </div>
    </div>
  );
}
export default WeatherAppPage;