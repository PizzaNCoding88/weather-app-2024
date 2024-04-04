import Hourly from "./HourlyForecast.module.css";
import Sun from "../../assets/sunny.svg";
import Image from "next/image";

const HourlyForecast = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className={Hourly.container}>
        <p>Hourly Forecast</p>
        <div className={Hourly.hourscontainer}>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
          <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>3PM</p>
            <Image alt="weather Icon" src={Sun}></Image>
            <p className={Hourly.temp}>10°C</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
