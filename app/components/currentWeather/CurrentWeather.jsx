import React from "react";
import Current from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  return (
    <section className={Current.container}>
      <div>Date</div>
      <div>Location</div>
      <div>Current Temp</div>
      <div>Feels Like</div>
      <div>Current Weather</div>
      <div>High and Low</div>
    </section>
  );
};

export default CurrentWeather;
