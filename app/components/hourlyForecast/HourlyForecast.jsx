import Hourly from "./HourlyForecast.module.css";
import Sun from "../../assets/sunny.svg";
import Image from "next/image";
import HourlyForecastPill from "./HourlyForecastPill";

const HourlyForecast = (props) => {
  const { data } = props;
  // console.log(data);

  function unixToTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    return hours;
  }

  // console.log(times);

  // Object.values(data.daily.time).map((item) => times.push(item));
  // Object.values(data.daily.temperature_2m_max).map((item) =>
  //   highTemps.push(item)
  // );
  // Object.values(data.daily.temperature_2m_min).map((item) =>
  //   lowTemps.push(item)
  // );

  return (
    <>
      {/* <div className={Hourly.container}>
        <p>Hourly Forecast</p>
        <div className={Hourly.hourscontainer}>
          {data.map((data, i) => (
            <HourlyForecastPill data={data} key={i} />
          ))}
        </div>
      </div> */}
      {/* <div className={Hourly.container}>
        <p>Hourly Forecast</p>
        {times.map((time, i) => (
          // <HourlyForecastPill key={i} time={time} />
        ))}
      </div> */}
      {/* <HourlyForecastPill time={times} /> */}
      <HourlyForecastPill time={data} />
    </>
  );
};

export default HourlyForecast;
