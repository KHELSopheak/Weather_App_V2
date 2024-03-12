import { useEffect } from "react";
import PrimarySearchBar from "../Components/Navbar/PrimarySearchBar";
import CurrentWeather from "../Components/BodyCurrentWeather/CurrentWeather";
import DailyWeather from "../Components/BodyCurrentWeather/DailyWeahter";
import HourlyWeather from "../Components/BodyCurrentWeather/HourlyWeather";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";

const HomePageLayoutContext = createContext();

const HomePage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const [weatherData, setWeatherData] = useState({});

  // Check theme when component mounts
  useEffect(() => {
    // Use Tailwind CSS dark mode classes
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const handleWeatherDataChange = (data) => {
    setWeatherData(data);
  };
  // if user enter empty text
  const isEmpty = !weatherData?.current;

  return (
    <HomePageLayoutContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      <section
        className={`bg-gradient-to-r ${
          isDarkTheme ? "from-gray-800 to-gray-900" : "from-cyan-500 to-sky-200"
        } p-2 w-full min-h-screen`}
      >
        <PrimarySearchBar onWeatherDataChange={handleWeatherDataChange} />
        {isEmpty ? (
          <div className="text-slate-600 text-sm text-center font-mono font-semibold uppercase my-4">
            Location Not Found.
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <CurrentWeather weatherData={weatherData} />
            <HourlyWeather weatherData={weatherData} />
            <DailyWeather weatherData={weatherData} />
          </div>
        )}
      </section>
    </HomePageLayoutContext.Provider>
  );
};

export const useHomeLayoutContext = () => useContext(HomePageLayoutContext);
export default HomePage;
