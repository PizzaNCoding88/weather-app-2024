import React from "react";
import Hourly from "./HourlyForecastPill.module.css";
// import Sun from "../../assets/sunny.svg";
// import Sun from "../../assets/icons/sun.png";
// import Cloud from "../../assets/icons/cloud.png";
// import Rain from "../../assets/icons/Rain.png";
import Image from "next/image";

const HourlyForecastPill = (props) => {
  const { data } = props;

  function unixToTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    return hours;
  }

  function unixToDate(time) {
    let date = new Date(time * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // let day = date.getDay();
    let day = days[date.getDay()];
    return day;
  }

  const currentWeather = data.weather[0].main;

  // const path = `/assets/icons${currentWeather}.png`;
  // const path = `/../assets/icons${currentWeather}.png`;

  const path = `/_next/static/media/${currentWeather}.png`;
  const pill = (
    <div>
      <div className={Hourly.hour}>
        <p className={Hourly.dayhour}>{unixToTime(data.dt)}:00</p>
        {/* <p className={Hourly.dayhour}>{unixToDate(data.dt)}</p> */}
        <div>
          <Image alt="weather Icon" src={path} width={10} height={10}></Image>
        </div>
        <p className={Hourly.temp}>{Math.trunc(data.main.temp)}°C</p>
      </div>
    </div>
  );
  return <div>{data ? pill : null}</div>;
};

export default HourlyForecastPill;
