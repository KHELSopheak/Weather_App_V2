/* eslint-disable react/prop-types */
const DailyWeather = ({ weatherData }) => {
  return (
    <section className="static justify-center w-full">
      <h2 className="text-slate-100 text-sm font-mono font-semibold uppercase my-4">
        Daily forecast 🌤️
      </h2>
      <div className="flex flex-col relative justify-center bg-gradient-to-r from-cyan-600 to-sky-400 p-2 rounded-lg md:flex-row md:justify-evenly md:gap-2 md:my-8">
        <div className="flex flex-col w-full">
          <ul className="max-w-72 text-slate-100 md:max-w-full">
            <div className="md:max-w-full md:columns-2 md:gap-9">
              <li className="flex flex-col md:w-full">
                <div className="flex flex-row justify-between">
                  <p className="flex flex-col mt-3 gap-4">
                    Tomorrow{" "}
                    <span className="text-xs">
                      {weatherData?.forecast?.forecastday[1]?.date}
                    </span>
                  </p>
                  <img
                    className="size-12 md:size-14"
                    src={
                      weatherData?.forecast?.forecastday[1]?.day?.condition
                        ?.icon
                    }
                  />
                  <p className="flex flex-col mt-3 gap-4">
                    {weatherData?.forecast?.forecastday[1]?.day?.avgtemp_c}°C{" "}
                    <span className="text-xs">
                      {
                        weatherData?.forecast?.forecastday[1]?.day?.condition
                          ?.text
                      }
                    </span>
                  </p>
                </div>
                <hr className="border w-full my-2" />
              </li>
              {(weatherData?.forecast?.forecastday || [])
                .slice(2)
                .map((day, index) => (
                  <li className="flex flex-col md:w-full" key={index + 1}>
                    <div className="flex flex-row justify-between">
                      <p className="flex flex-col mt-3 gap-4">
                        Next Day
                        <span className="text-xs">{day.date}</span>
                      </p>
                      <img
                        className="size-12 md:size-14"
                        src={day.day.condition.icon}
                        alt={`Day ${index + 1}`}
                      />
                      <p className="flex flex-col mt-3 gap-4">
                        {day.day.avgtemp_c}°C{" "}
                        <span className="text-xs">
                          {day.day.condition.text}
                        </span>
                      </p>
                    </div>
                    <hr className="border w-full my-2" />
                  </li>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default DailyWeather;
