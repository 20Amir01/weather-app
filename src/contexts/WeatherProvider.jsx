import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import { useContext } from "react";
const API_KEY = "32b7a5b5e839b0591ed01ab390d97473";
const WeatherContext = createContext();
const initialState = {
    loading:false,
    error:false,
  initialCity: "rasht",
  searchQuery: "",
  currentCityData: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setCity":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "setCurrentCityData":
      return {
        ...state,
        currentCityData: action.payload,
      };
    case "start_loading":return{
        ...state,loading:true,
    }
    case "end_loading":return{
        ...state,loading:false,
    }
    case "set_error":return{
        ...state,error:action.payload
    }
    default:
      throw new Error("action type not defined");
  }
};
WeatherProvider.propTypes={
    children:PropTypes.node
}
function WeatherProvider({ children }) {
  const [{ searchQuery, currentCityData, initialCity ,loading,error}, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    console.log(error)
    async function fetchData() {
      try {
          dispatch({type:"start_loading"})
          dispatch({type:"set_error",payload:false})
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${initialCity}&appid=${API_KEY}`
        );
        const data = await res.json();
        dispatch({ type: "setCurrentCityData", payload: data });
        console.log(data);
      } catch{
        dispatch({type:"set_error",payload:true})

      }finally{
        dispatch({type:"end_loading"})
      }
    }
    fetchData();
  }, [initialCity]);
  const handleSubmit = () => {
    async function fetchData() {
      try {
        dispatch({type:"set_error",payload:false})
        dispatch({type:"start_loading"})
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
        );
        const data = await res.json();
        dispatch({ type: "setCurrentCityData", payload: data });
        console.log(data, currentCityData);
      } catch{
        dispatch({type:"set_error",payload:true})
      }finally{
        dispatch({type:"end_loading"})
      }
    }
    fetchData();
  };
  return (
    <WeatherContext.Provider
      value={{ searchQuery, currentCityData, initialCity, handleSubmit ,loading,dispatch,error}}
    >
      {children}
    </WeatherContext.Provider>
  );
}
function useWeather(){
    const context=useContext(WeatherContext)
    if(context===undefined) throw new Error("context has used out of provider")
    return context;
}
export {useWeather,WeatherProvider}