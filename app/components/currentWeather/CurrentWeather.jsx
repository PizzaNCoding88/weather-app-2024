import React from "react";
import Current from "./CurrentWeather.module.css";
import Image from "next/image";
import Cloud1 from "../../assets/cloud.svg";

const CurrentWeather = (props) => {
  const { data } = props;

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

  const weekDay = days[date.getDay()];

  const currentWeather = data.weather[0].main;
  const path = `/_next/static/media/${currentWeather}.png`;

  return (
    <>
      {data ? (
        <section className={Current.container}>
          <div className={Current.date}>
            {today} {""}
            {month}, {weekDay}
          </div>
          <div className={Current.location}>
            {data.name}, {data.sys.country}
          </div>
          <div className={Current.current_temp}>
            {Math.trunc(data.main.temp)} °C
          </div>
          <div className={Current.feels_like}>
            Feels Like {Math.trunc(data.main.feels_like)} °C
          </div>
          <div className={Current.current_weather}>
            <div>{data.weather[0].main}</div>
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
            <div>H: {Math.trunc(data.main.temp_max)} °C</div>
            <div>L: {Math.trunc(data.main.temp_min)} °C</div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default CurrentWeather;
