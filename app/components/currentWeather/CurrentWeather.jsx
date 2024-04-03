import React from "react";
import Current from "./CurrentWeather.module.css";

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

  return (
    <section className={Current.container}>
      <div className={Current.date}>
        {today} {""}
        {month}, {weekDay}
      </div>
      <div className={Current.location}>
        {data.name},<span>{data.sys.country}</span>
      </div>
      <div className={Current.current_temp}>Current temp</div>
      <div className={Current.feels_like}>Feels Like</div>
      <div className={Current.current_weather}>Current Weather</div>
      <div className={Current.high_low}>High and Low</div>
    </section>
  );
};

export default CurrentWeather;
