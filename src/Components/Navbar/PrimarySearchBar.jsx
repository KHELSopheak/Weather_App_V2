/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TbWorldSearch } from "react-icons/tb";
import DarkMode from "./DarkMode";

const PrimarySearchBar = ({ onWeatherDataChange }) => {
  const defaultQuery = "Cambodia";
  const [searchText, setSearchText] = useState(defaultQuery);
  const [searchQuery, setSearchQuery] = useState(defaultQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch data for the current day
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=2da904978abf4bf7802145154230509&q=${searchQuery}&days=7&aqi=no&alerts=no`
        );
        const data = await response.json();

        // Pass the weather data to the parent component
        onWeatherDataChange(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchText);
  };

  const onChangeText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10 bg-gradient-to-r from-cyan-600 to-sky-300 p-4 shadow-md rounded-lg">
      <p className="text-xl font-mono font-bold text-slate-50 text-center md:text-left">
        Meteorology 🌞
      </p>
      <div className="md:flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 p-2 rounded-full bg-slate-50">
            <form className="flex flex-row text-slate-500" onSubmit={onSubmit}>
              <input
                className="outline-none bg-transparent w-full"
                value={searchText}
                onChange={onChangeText}
                placeholder="Search for..."
              />
              <button type="submit" className="text-sky-400 cursor-pointer">
                <TbWorldSearch />
              </button>
            </form>
          </div>
          <DarkMode />
        </div>
        <div>
          {loading ? (
            <div className="text-slate-600 text-sm font-mono font-semibold uppercase my-4">
              Loading..🌤️
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default PrimarySearchBar;
