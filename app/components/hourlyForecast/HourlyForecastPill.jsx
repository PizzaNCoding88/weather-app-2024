import React from "react";
import Hourly from "./HourlyForecastPill.module.css";
// import Sun from "../../assets/sunny.svg";
// import Sun from "../../assets/icons/sun.png";
// import Cloud from "../../assets/icons/cloud.png";
// import Rain from "../../assets/icons/Rain.png";
import Image from "next/image";

const HourlyForecastPill = (props) => {
  const { time } = props;

  console.log(time);
  // console.log(typeof time.daily.temperature_2m_max);

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
    let day = days[date.getDay()];
    return day;
  }

  // const day = [...time.daily];
  // console.log(day);

  // const currentWeather = data.weather[0].main;

  // const path = `/assets/icons${currentWeather}.png`;
  // const path = `/../assets/icons${currentWeather}.png`;

  // const path = `/_next/static/media/${currentWeather}.png`;
  const pill = (
    <div>
      <div className={Hourly.hour}>
        {/* {time.daily.temperature_2m_max.map((day, i) => {
          <p className={Hourly.dayhour}>{time.daily.time[i].slice(-2)}</p>;
          console.log(time.daily.time[i].slice(-2));
        })} */}
        {time.daily.temperature_2m_max.map((temp, i) => (
          <p className={Hourly.dayHour} key={i}>
            {time.daily.time[i].slice(-2)}
          </p>
        ))}
        {/* <p className={Hourly.dayhour}>{unixToDate(data.dt)}</p> */}
        <div>
          {/* <Image alt="weather Icon" src={path} width={10} height={10}></Image> */}
        </div>
        {/* <p className={Hourly.temp}>{high}°C</p>
        <p className={Hourly.temp}>{low}°C</p> */}
      </div>
    </div>
  );
  return <div>{time ? pill : null}</div>;
};

export default HourlyForecastPill;
