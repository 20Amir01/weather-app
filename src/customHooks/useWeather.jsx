import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherProvider";

export function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined)
      throw new Error("context has used out of provider");
    return context;
  }