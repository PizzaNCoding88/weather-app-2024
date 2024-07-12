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
    <div className="flex flex-col bg-gray-500 w-[80px]">
      {/* <div>
        {Object.values(time.hourly.time).map((item, i) => (
          <p key={i}>{item.slice(-5)}</p>
        ))}
        <div className={Hourly.hour}></div>
      </div>
      <div>
        {Object.values(time.hourly.temperature_2m).map((temp, i) => (
          <p key={i}>{temp}</p>
        ))}
        <div className={Hourly.hour}></div>
      </div>
      <div>
        {Object.values(time.hourly.weather_code).map((code, i) => (
          <p key={i}>{code}</p>
        ))}
        <div className={Hourly.hour}></div>
      </div> */}
      <div>time</div>
      <div>temp</div>
      <div>forecast</div>
    </div>
  );
  return <div>{time ? pill : null}</div>;
};

export default HourlyForecastPill;
