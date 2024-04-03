"use client";
import Image from "next/image";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { useEffect, useState } from "react";

export default function Home() {
  const [noGeoLocation, setNoGeoLocation] = useState({});
  const [weather, setWeather] = useState({});

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
    console.log(latitude, longitude);
    fetchWeather(latitude, longitude);
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
    console.log(weather);
  }

  return (
    <main>
      <CurrentWeather data={weather} />
    </main>
  );
}
