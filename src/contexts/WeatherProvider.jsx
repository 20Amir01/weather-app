import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
const API_KEY = "32b7a5b5e839b0591ed01ab390d97473";
const WeatherContext = createContext();
const initialState = {
  loading: false,
  errorMessage: "",
  defaultCity:(JSON.parse(window.localStorage.getItem("city"))?JSON.parse(window.localStorage.getItem("city")):"Tehran"),
  searchQuery: "",
  currentCityData: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "defaultCiy/set":
      return {
        ...state,
        defaultCity: action.payload?action.payload:"Tehran",
      };
    case "city/set":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "currentCityData/set":
      return {
        ...state,
        currentCityData: action.payload,
      };
    case "loading/start":
      return {
        ...state,
        loading: true,
      };
    case "loading/end":
      return {
        ...state,
        loading: false,
      };
    case "error/clear":
      return {
        ...state,
        errorMessage: "",
      };
    case "error/set":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      throw new Error("action type not defined");
  }
};
// const localStorage = JSON.parse(window.localStorage.getItem("city"));
WeatherProvider.propTypes = {
  children: PropTypes.node,
};
function WeatherProvider({ children }) {
  const [
    { searchQuery, currentCityData, defaultCity, loading, errorMessage },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "error/clear" });
        dispatch({ type: "loading/start" });
        // dispatch({type:"defaultCiy/set",payload:JSON.parse(window.localStorage.getItem("city"))})
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}`
        );
        const data = await res.json();
        dispatch({ type: "currentCityData/set", payload: data });
      } catch (error) {
        dispatch({ type: "error/set", payload: error.message });
      } finally {
        dispatch({ type: "loading/end" });
      }
    }
    fetchData();
  }, [defaultCity, errorMessage]);
  const handleSubmit = () => {
    async function fetchData() {
      try {
        dispatch({ type: "error/clear" });
        dispatch({ type: "loading/start" });
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
        );
        const data = await res.json();
        dispatch({ type: "currentCityData/set", payload: data });
      } catch (error) {
        dispatch({ type: "error/set", payload: error.message });
      } finally {
        dispatch({ type: "loading/end" });
      }
    }
    fetchData();
  };
  return (
    <WeatherContext.Provider
      value={{
        searchQuery,
        currentCityData,
        defaultCity,
        handleSubmit,
        loading,
        dispatch,
        errorMessage,
        API_KEY,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
