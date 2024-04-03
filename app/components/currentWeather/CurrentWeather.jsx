import React from "react";
import Current from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  return (
    <section className={Current.container}>
      <div className={Current.date}>Date</div>
      <div className={Current.location}>Location</div>
      <div className={Current.current_temp}>Current Temp</div>
      <div className={Current.feels_like}>Feels Like</div>
      <div className={Current.current_weather}>Current Weather</div>
      <div className={Current.high_low}>High and Low</div>
    </section>
  );
};

export default CurrentWeather;
