import React from "react";
import Daily from "./DailyForecast.module.css";
import Image from "next/image";
import Sun from "../../assets/icons/Sun.png";

const DailyForecast = () => {
  return (
    <>
      <div className={Daily.container}>
        <p className={Daily.title}>Daily Forecast</p>
        <div className={Daily.pillcontainer}>
          <div className={Daily.pill}>
            <p>Today</p>
            <Image src={Sun} alt="weather icon" width={25} height={15} />
            <p>10°C</p>
          </div>
          <div className={Daily.pill}>Tomorrow</div>
          <div className={Daily.pill}>Friday</div>
          <div className={Daily.pill}>Saturday</div>
        </div>
      </div>
    </>
  );
};

export default DailyForecast;
