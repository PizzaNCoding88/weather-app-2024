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

  const currentWeather = data.weather[0].main;
  // console.log(currentWeather);

  const path = `/_next/static/media/${currentWeather}.png`;
  const pill = (
    <div>
      {/* {console.log(data)} */}
      <div className={Hourly.hour}>
        <p className={Hourly.dayhour}>{unixToTime(data.dt)}:00</p>
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
