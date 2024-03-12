/* eslint-disable react/prop-types */
import { PiThermometerHotLight } from "react-icons/pi";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { LiaWindSolid } from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";
import { BsSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";

const CurrentWeather = ({ weatherData }) => {
  return (
    <section className="justify-center w-full">
      <h2 className="text-slate-100 text-sm font-semibold uppercase my-4 md:py-4">
        Current Weather 🗓️
      </h2>
      <div className="flex flex-col relative justify-center bg-gradient-to-r from-cyan-600 to-sky-400 p-2 rounded-lg md:flex-row md:justify-evenly md:gap-2">
        <div className="relative flex items-center justify-center flex-col w-full md:max-w-96">
          <div className="flex flex-col text-center w-fit">
            <h2 className="text-2xl font-bold text-slate-50 mt-2 md:text-3xl">
              Today
            </h2>
            <h2 className="text-2xl font-bold text-slate-50 mt-2 md:text-3xl">
              {weatherData?.location?.name || "N/A"},
              {weatherData?.location?.country || "N/A"}
            </h2>
          </div>
          <img
            className="bg-cover bg-no-repeat size-40 md:size-56"
            src={weatherData?.current?.condition?.icon}
          />
          <div className="flex flex-col text-center w-fit">
            <h3 className="relative text-4xl font-bold text-slate-50 md:text-5xl">
              {weatherData?.current?.temp_c || "0"}
              <span className="absolute top-0 right-[-1.3rem] text-xl z-10">
                °C
              </span>
            </h3>
            <h4 className="text-xs text-slate-50 mt-2.5">
              {weatherData?.current?.condition?.text || "N/A"}
            </h4>
          </div>
        </div>
        <div className="relative flex flex-col mb-9 w-full md:w-1/3">
          <ul className="mt-8 max-w-72 text-slate-50">
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <PiThermometerHotLight className="size-6 mt-2" />
                <p className="text-sm mt-2.5">Feels Like</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.current?.feelslike_c || "0"} °C
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <PiArrowsDownUpFill className="w-6 mt-2" />
                <p className="text-sm mt-2.5">Min/Max</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.forecast?.forecastday[0]?.day?.mintemp_c || "0"} -{" "}
                {weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c || "0"}{" "}
                °C
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <LiaWindSolid className="w-6 mt-2" />
                <p className="text-sm mt-2.5">Wind Gusts</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.current?.wind_kph || "0"} km/h
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <WiHumidity className="w-6 mt-2" />
                <p className="text-sm mt-2.5">Humidity</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.current?.humidity || "0"} %
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <BsSunriseFill className="w-6 mt-2" />
                <p className="text-sm mt-2.5">Sunrise</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.forecast?.forecastday[0]?.astro?.sunrise || "N/A"}
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
            <li className="flex flex-row justify-between gap-2 md:mt-5">
              <div className="flex gap-2">
                <BsSunsetFill className="w-6 mt-2" />
                <p className="text-sm mt-2.5">Sunset</p>
              </div>
              <span className="text-sm mt-2.5">
                {weatherData?.forecast?.forecastday[0]?.astro?.sunset || "N/A"}
              </span>
            </li>
            <hr className="border-t border-slate-200 w-full my-2" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
