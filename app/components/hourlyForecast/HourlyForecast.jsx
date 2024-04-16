import Hourly from "./HourlyForecast.module.css";
import Sun from "../../assets/sunny.svg";
import Image from "next/image";
import HourlyForecastPill from "./HourlyForecastPill";

const HourlyForecast = (props) => {
  const { data } = props;

  function unixToTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    return hours;
  }

  return (
    <>
      <div className={Hourly.container}>
        <p>Hourly Forecast</p>
        <div className={Hourly.hourscontainer}>
          {data.map((data, i) => (
            <HourlyForecastPill data={data} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
