import React from "react";
import "./WeatherInformations5days.css";

const WeatherInformations5days = ({ weather5days }) => {
  console.log(weather5days);

  let dailyForecast = {};

  for (let forecast of weather5days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const nex5daysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newdate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newdate;
  }

  return (
    <div className="weather-container">
      <h3>Previsão Próximos 5 dias</h3>

      <div className="list">
        {nex5daysForecast.map((forecast) => (
          <div key={forecast.dt} className="item">
            <p className="day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt=""
            />
            <p className="desc">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C max {" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherInformations5days;
