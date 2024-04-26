import React from "react";
import Current from "./CurrentWeather.module.css";
import Image from "next/image";
// import Cloud1 from "../../assets/cloud.svg";

const CurrentWeather = (props) => {
  const { data, location } = props;
  console.log(data, location);

  const date = new Date();
  const today = date.getDate();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  //
  const weekDay = days[date.getDay()];

  function checkWeatherCode(code) {
    switch (code) {
      case 0:
        return "Clear Sky";
        break;
      case (1, 2, 3):
        return "Partly cloudy";
    }
  }

  const codes = {
    0: "fair",
    1: "mainly clear",
    2: "partly cloudy",
    3: "overcast",
    45: "fog",
    48: "depositing rime fog",
    51: "light drizzle",
    53: "moderate drizzle",
    55: "dense drizzle",
    56: "light freezing drizzle",
    57: "dense freezing drizzle",
    61: "slight rain",
    63: "moderate rain",
    65: "heavy rain",
    66: "light freezing rain",
    67: "heavy freezing rain",
    71: "slight snow fall",
    73: "moderate snow fall",
    75: "heavy snow fall",
    77: "snow grains",
    80: "slight rain showers",
    81: "moderate rain showers",
    82: "heavy rain showers",
    85: "slight snow showers",
    86: "heavy snow showers",
    95: "slight to moderate thunderstorm",
    96: "thunderstorm with slight hail",
    99: "thunderstorm with heavy hail",
  };

  const weatherCode = data.current.weather_code;
  const weatherCondition =
    codes[`${weatherCode}`].charAt(0).toUpperCase() +
    codes[`${weatherCode}`].slice(1);

  // const currentWeather = data.weather[0].main;
  const path = `/_next/static/media/${weatherCondition}.png`;

  return (
    <>
      {data ? (
        <section className={Current.container}>
          <div className={Current.date}>
            {today} {""}
            {month}, {weekDay}
          </div>
          <div className={Current.location}>
            {location.city}, {location.country_code.toUpperCase()}
          </div>
          <div className={Current.current_temp}>
            {Math.trunc(data.current.temperature_2m)} °C
          </div>
          <div className={Current.feels_like}>
            Feels Like {Math.trunc(data.current.apparent_temperature)} °C
          </div>
          <div className={Current.current_weather}>
            <div>{weatherCondition}</div>
            <div className="h-10 w-10 relative">
              <Image
                alt="weather-icon"
                src={path}
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className={Current.high_low}>
            <div>H: {Math.trunc(data.daily.temperature_2m_max[0])} °C</div>
            <div>L: {Math.trunc(data.daily.temperature_2m_min[0])} °C</div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default CurrentWeather;
