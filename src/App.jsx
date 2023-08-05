import "boxicons";
import { useWeather } from "./customHooks/useWeather";
import Error  from "./components/Error";
import Loading  from "./components/Loading";
import AppContainer  from "./components/AppContainer";
import WeatherAppPage  from "./pages/WeatherAppPage";
export const API_KEY = "32b7a5b5e839b0591ed01ab390d97473";
function App() {
  const { loading, currentCityData, errorMessage } = useWeather();
  if (errorMessage) return <Error>{errorMessage}</Error>;
  if (loading) return <Loading />;
  return (
    <>
      {Object.entries(currentCityData).length > 0 && (
        <AppContainer>
          <WeatherAppPage />
        </AppContainer>
      )}
    </>
  );
}
export default App;
