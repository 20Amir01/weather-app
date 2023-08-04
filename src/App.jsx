import "boxicons";
import { useEffect } from "react";
import { useState } from "react";
import { useWeather } from "./contexts/WeatherProvider";
function App() {
  const { loading, currentCityData, error } = useWeather();
  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <>
      {Object.entries(currentCityData).length > 0 &&
        Number(currentCityData.code) != 404 && (
          <div className="max-w-[1366px] overflow-hidden font-Edu-SA">
            <div className="flex flex-col md:flex-row w-full p-5">
              <div className="text-gray-400 w-full p-5 flex flex-col gap-10">
                <Date />
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

function Date() {
  return (
    <div className="text-right text-white">
      <p>21 April 2023 | 11:00</p>
    </div>
  );
}

function Forecast() {
  return (
    <>
      <div className="p-1 text-xl">
        <p>The Next Days Forecast</p>
      </div>
      <div>
        <div className="p-5">
          <ul className="flex justify-center gap-1">
            <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
              5 days
            </li>
            <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
              14 days
            </li>
            <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">
              30 days
            </li>
          </ul>
          <div>
            <ul className="flex flex-col gap-1">
              <li>
                <div className="flex justify-between p-1 items-center">
                  <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                    <box-icon name="cloud" color="#ffffff"></box-icon>
                  </div>
                  <div className="flex flex-col">
                    <span>Friday</span>
                    <span>Cloudy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>14</span>
                    <span>17</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between p-1 items-center">
                  <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                    <box-icon name="cloud" color="#ffffff"></box-icon>
                  </div>
                  <div className="flex flex-col">
                    <span>Friday</span>
                    <span>Cloudy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>14</span>
                    <span>17</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between p-1 items-center">
                  <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                    <box-icon name="cloud" color="#ffffff"></box-icon>
                  </div>
                  <div className="flex flex-col">
                    <span>Friday</span>
                    <span>Cloudy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>14</span>
                    <span>17</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between p-1 items-center">
                  <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                    <box-icon name="cloud" color="#ffffff"></box-icon>
                  </div>
                  <div className="flex flex-col">
                    <span>Friday</span>
                    <span>Cloudy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>14</span>
                    <span>17</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between p-1 items-center">
                  <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                    <box-icon name="cloud" color="#ffffff"></box-icon>
                  </div>
                  <div className="flex flex-col">
                    <span>Friday</span>
                    <span>Cloudy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>14</span>
                    <span>17</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
function WeatherDetailsPart1() {
  const { currentCityData } = useWeather();
  return (
    <div>
      <div className="text-center flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-9xl flex gap-5 justify-center items-center">
            <span className="capitalize">{currentCityData.name}</span>
            <span className="text-2xl">{currentCityData.sys.country}</span>
          </h1>
          <h1 className="text-5xl">{currentCityData.weather.at(0).main}</h1>
          <h2 className="text-3xl">
            {currentCityData.weather.at(0).description}
          </h2>
        </div>
        <div className="bg-gray-400 h-[1px] w-full rounded-full"></div>
        <div className="flex justify-center items-center gap-5">
          <div>humidity:{currentCityData.main.humidity}</div>
          <div>pressure :{currentCityData.main.pressure}</div>
          <div>sea level :{currentCityData.main.sea_level}</div>
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
    <div className="flex-col p-7">
      <div className="text-7xl">
        <span>{temp(currentCityData.main.temp)}</span>
        <span>°C</span>
      </div>
      <div className="flex justify-between w-full p-1">
        <div>
          <span>min</span>:{temp(currentCityData.main.temp_min)}
          <span>°C</span>
        </div>
        <div>
          <span>max</span>:{temp(currentCityData.main.temp_max)}
          <span>°C</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span>Wind :</span>
        </div>
        <div>
          <span>{currentCityData.wind.deg}</span>
          <span>deg°</span>
        </div>
        <div>
          <span>{(currentCityData.wind.speed * 3.6).toFixed(1)}</span>
          <span>km/h</span>{" "}
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
