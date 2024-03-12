/* eslint-disable react/prop-types */
import moment from "moment";

const HourlyWeather = ({ weatherData }) => {
  const days = weatherData?.forecast?.forecastday || [];

  const hours = days.length > 0 ? days[0].hour : [];
  return (
    <section className="static justify-center w-full">
      <h2 className="text-slate-100 text-sm font-semibold uppercase my-4">
        Hourly Forecasts 🕐
      </h2>
      <div className="flex flex-row overflow-x-auto md:py-4 md:justify-start gap-2">
        {hours.map((hour, index) => {
          // time with moment.js
          const time = moment(hour.time).format("LT");
          return (
            <div
              className="flex flex-col justify-center items-center min-w-24 md:min-w-32 md:min-h-48 bg-gradient-to-r from-cyan-600 to-sky-400 bg-opacity-50 p-2 rounded-lg"
              key={`hour-index-${index}`}
            >
              <div className="text-xs text-white mt-2.5">{time}</div>
              <img className="size-14" src={hour?.condition?.icon} />
              <div className="text-xs text-white mt-2.5">
                {hour?.condition?.text || "N/A"}
              </div>
              <div className="text-xs text-white mt-2.5">{hour.temp_c}°C</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HourlyWeather;
