import React from "react";
import Hourly from "./HourlyForecastPill.module.css";
import Sun from "../../assets/sunny.svg";
import Image from "next/image";

const HourlyForecastPill = (props) => {
  const { data, key } = props;

  function unixToTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    return hours;
  }

  const pill = (
    <div>
      {console.log(data)}
      <div className={Hourly.hour}>
        <p className={Hourly.dayhour}>{unixToTime(data.dt)}:00</p>
        <Image alt="weather Icon" src={Sun}></Image>
        <p className={Hourly.temp}>{Math.trunc(data.main.temp)}°C</p>
      </div>
    </div>
  );
  return <div>{data ? pill : null}</div>;
};

export default HourlyForecastPill;
