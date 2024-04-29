"use client";
import Image from "next/image";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { useEffect, useState } from "react";
import LoadingPage from "./components/loadingPage/LoadingPage";
import HourlyForecast from "./components/hourlyForecast/HourlyForecast";
import DailyForecast from "./components/dailyForecast/DailyForecast";

export default function Home() {
  const [noGeoLocation, setNoGeoLocation] = useState({});
  const [weather, setWeather] = useState(false);
  const [hourlyWeather, setHourlyWeather] = useState(false);
  const [location, setLocation] = useState();

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
    getNewWeather(latitude, longitude);
    getLocation(latitude, longitude);
  }

  function error(error) {
    setNoGeoLocation(true);
  }

  async function getNewWeather(lat, lon) {
    const tempWeather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,is_day,weather_code,&hourly=temperature_2m,weather_code,&daily=temperature_2m_max,temperature_2m_min`
    );
    const newWeather = await tempWeather.json();
    setWeather(newWeather);
  }

  async function getLocation(lat, lon) {
    const tempLocation = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=9b654175132c4e93906cd41802634090`
    );
    const location = await tempLocation.json();
    // console.log(location);
    setLocation(location.features[0].properties);
  }

  return (
    <main className="main-bg">
      <>
        {/* {weather && hourlyWeather ? ( */}
        {weather && location ? (
          <div>
            <CurrentWeather data={weather} location={location} />
            <HourlyForecast data={weather} />
            {/* <DailyForecast />  */}
          </div>
        ) : (
          <LoadingPage />
        )}
      </>
    </main>
  );
}
