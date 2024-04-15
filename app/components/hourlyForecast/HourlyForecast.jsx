// import Hourly from "./HourlyForecast.module.css";
// import Sun from "../../assets/sunny.svg";
// import Image from "next/image";

// const HourlyForecast = (props) => {
//   const { data } = props;
//   console.log(data);

//   function unixToTime(time) {
//     let date = new Date(time * 1000);
//     let hours = date.getHours();
//     return hours;
//   }

//   console.log(data[0].dt);
//   return (
//     <>
//       <div className={Hourly.container}>
//         <p>Hourly Forecast</p>
//         <div className={Hourly.hourscontainer}>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>{unixToTime(data[0].dt)}:00</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//           <div className={Hourly.hour}>
//             <p className={Hourly.dayhour}>3PM</p>
//             <Image alt="weather Icon" src={Sun}></Image>
//             <p className={Hourly.temp}>10°C</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HourlyForecast;

import Hourly from "./HourlyForecast.module.css";
import Sun from "../../assets/sunny.svg";
import Image from "next/image";

const HourlyForecast = (props) => {
  const { data } = props;
  console.log(data);

  function unixToTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    return hours;
  }

  console.log(data[0].dt);
  return (
    <>
      <div className={Hourly.container}>
        <p>Hourly Forecast</p>
        <div className={Hourly.hourscontainer}>
          {data.map((data, key) => {
            return <div key={key}>{unixToTime(data.dt)}:00</div>;
          })}

          {/* <div className={Hourly.hour}>
            <p className={Hourly.dayhour}>{unixToTime(data[0].dt)}:00</p>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
