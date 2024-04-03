import Image from "next/image";
import CurrentWeather from "./components/currentWeather/CurrentWeather";

export default function Home() {
  return (
    <main>
      <CurrentWeather />
    </main>
  );
}
