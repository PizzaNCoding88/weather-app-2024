"use client";
import Image from "next/image";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { useEffect, useState } from "react";
import LoadingPage from "./components/loadingPage/LoadingPage";
import HourlyForecast from "./components/hourlyForecast/HourlyForecast";

export default function Home() {
  const [noGeoLocation, setNoGeoLocation] = useState({});
  const [weather, setWeather] = useState(false);
  const [hourlyWeather, setHourlyWeather] = useState(false);

  useEffect(() => {
    getBrowserLocation();
  }, []);

  function getBrowserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position, error);
    } else {
      console.log("error");
    }
  }

  function position(position) {
    setNoGeoLocation(false);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(latitude, longitude);
    fetchWeather(latitude, longitude);
    fetchHourlyWeather(latitude, longitude);
  }

  function error(error) {
    setNoGeoLocation(true);
  }

  async function fetchWeather(latitude, longitude) {
    const temporaryWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
    );
    const weather = await temporaryWeather.json();
    setWeather(weather);
    // console.log(weather);
  }

  async function fetchHourlyWeather(latitude, longitude) {
    const tempHourlyWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
    );
    const hourlyWeatherTemp = await tempHourlyWeather.json();
    const hourlyWeather = hourlyWeatherTemp.list;
    setHourlyWeather(hourlyWeather);
    // console.log(hourlyWeather);
  }

  return (
    <main className="main-bg">
      <>
        {weather && hourlyWeather ? (
          <div>
            <CurrentWeather data={weather} />
            <HourlyForecast data={hourlyWeather} />
          </div>
        ) : (
          <LoadingPage />
        )}
      </>
    </main>
  );
}

// "use client";
// import Image from "next/image";
// import CurrentWeather from "./components/currentWeather/CurrentWeather";
// import { useEffect, useState } from "react";
// import LoadingPage from "./components/loadingPage/LoadingPage";
// import HourlyForecast from "./components/hourlyForecast/HourlyForecast";

// export default function Home() {
//   const [noGeoLocation, setNoGeoLocation] = useState({});
//   const [weather, setWeather] = useState(false);
//   const [hourlyWeather, setHourlyWeather] = useState(false);

//   useEffect(() => {
//     getBrowserLocation();
//   }, []);

//   function getBrowserLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position, error);
//     } else {
//       console.log("error");
//     }
//   }

//   function position(position) {
//     setNoGeoLocation(false);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     // console.log(latitude, longitude);
//     fetchWeather(latitude, longitude);
//     fetchHourlyWeather(latitude, longitude);
//   }

//   function error(error) {
//     setNoGeoLocation(true);
//   }

//   async function fetchWeather(latitude, longitude) {
//     const temporaryWeather = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
//     );
//     const weather = await temporaryWeather.json();
//     setWeather(weather);
//     // console.log(weather);
//   }

//   async function fetchHourlyWeather(latitude, longitude) {
//     const tempHourlyWeather = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=10&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
//     );
//     const hourlyWeatherTemp = await tempHourlyWeather.json();
//     const hourlyWeather = hourlyWeatherTemp.list;
//     setHourlyWeather(hourlyWeather);
//     // console.log(hourlyWeather);
//   }

//   return (
//     <main className="main-bg">
//       <>
//         {weather && hourlyWeather ? (
//           <div>
//             <CurrentWeather data={weather} />
//             <HourlyForecast data={hourlyWeather} />
//           </div>
//         ) : (
//           <LoadingPage />
//         )}
//       </>
//     </main>
//   );
// }
