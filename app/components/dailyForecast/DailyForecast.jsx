import React from "react";
import Daily from "./DailyForecast.module.css";

const DailyForecast = () => {
  return (
    <>
      <div>
        <p className={Daily.title}>Daily Forecast</p>
        <div className={Daily.container}></div>
      </div>
    </>
  );
};

export default DailyForecast;
