import "boxicons";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useWeather } from "./contexts/WeatherProvider";
const API_KEY = "32b7a5b5e839b0591ed01ab390d97473";
function App() {
  const { loading, currentCityData } = useWeather();

  if (loading) return <Loading />;
  // if (error) return <p className="text-white">error</p>;
  return (
    <>
      {Object.entries(currentCityData).length > 0 && (
        <div className="max-w-[1366px] overflow-hidden font-Edu-SA">
          <div className="flex flex-col md:flex-row w-full p-5">
            <div className="text-gray-400 w-full p-5 flex flex-col gap-10">
              <Time />
              <WeatherDetailsPart1 />
            </div>
            <div className="bg-white bg-opacity-5 text-gray-100 h-auto w-auto p-5 rounded text-center">
              <Search />
              <WeatherDetailsPart2 />
              <div className="w-full h-[1px] bg-gray-600"></div>
              <Forecast />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-auto">
        <h1 className="text-9xl text-gray-300">Loading...</h1>
      </div>
    </div>
  );
}
function Search() {
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
              dispatch({ type: "setCity", payload: e.target.value });
            }}
          />
        </form>
      </div>
    </>
  );
}

function Time() {
  const date = new Date();
  const showTime = date.getHours()
      + ':' + date.getMinutes()
      + ":" + date.getSeconds();
    const showDate=date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay()
  return (
    <div className="text-right text-white">
      <p className="text-lg">{showTime} <span className="text-gray-500">|</span> {showDate}</p>
    </div>
  );
}

function Forecast() {
  const { currentCityData } = useWeather();
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
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currentCityData.id]);
  return (
    <>
      <div className="p-1 text-xl">
        <p>The Next 5 Days Forecast</p>
      </div>
      {currentCityData.cod !== "404" && forecast && (
        <div>
          <div className="p-5">
            {/* <ul className="flex justify-center gap-1">
              <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
                5 days
              </li>
              <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
                14 days
              </li>
              <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
                30 days
              </li>
            </ul> */}
            <div>
              <ul className="flex flex-col gap-1">
                {forecast &&
                  forecast.map((item, index) => {
                    return <ForecastItem key={index} item={item} />;
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
ForecastItem.propTypes = {
  item: PropTypes.obj,
};
function ForecastItem({ item }) {
  console.log(item)
  const{currentCityData}=useWeather()
  return (
    <li>
      <div className="flex justify-between p-1 items-center">
        <div>
        <img
              className="w-8"
              src={`https://openweathermap.org/img/wn/${currentCityData.cod !== "404" &&item.weather.at(0).icon}@2x.png`}/>

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
}
function WeatherDetailsPart1() {
  const { currentCityData } = useWeather();
  return (
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
              src={`https://openweathermap.org/img/wn/${currentCityData.cod !== "404" &&currentCityData.weather.at(0).icon}@2x.png`}
            />
          </div>
        </div>
        <div className="bg-gray-400 bg-opacity-50 h-[1px] w-full rounded-full"></div>
        <div className="flex justify-center items-center gap-5">
          {currentCityData.cod !== "404" && (
            <>
              <div>humidity:{currentCityData.main.humidity}</div>
              <div>pressure :{currentCityData.main.pressure}</div>
              <div>sea level :{currentCityData.main.sea_level}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function temp(temp) {
  return Math.floor(temp - 273.15);
}
function WeatherDetailsPart2() {
  const { currentCityData } = useWeather();
  return (
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
          {currentCityData.cod !== "404" && temp(currentCityData.main.temp_min)}
          <span>°C</span>
        </div>
        <div>
          <span>max</span>:
          {currentCityData.cod !== "404" && temp(currentCityData.main.temp_max)}
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
  );
}
{
  /* <box-icon name='cloud' color='#ffffff' ></box-icon>
<box-icon name='cloud-drizzle' color='#ffffff' ></box-icon>
<box-icon name='cloud-light-rain' color='#ffffff' ></box-icon>
<box-icon name='cloud-lightning' color='#ffffff' ></box-icon>
<box-icon name='cloud-rain' color='#ffffff' ></box-icon>
<box-icon name='cloud-rain' color='#ffffff' ></box-icon>
<box-icon name='wind' color='#ffffff' ></box-icon>
<box-icon name='sun' color='#ffffff' ></box-icon> */
}
