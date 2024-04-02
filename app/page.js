"use client";

import Weather from "@/components/weather";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import bgWeather from "../public/images/bgWeather.jpg";
import Spinner from "@/components/spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  // console.log(url);
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log("🚀 ~ axios.get ~ response.data:", response.data);
    });

    setCity("");
    setLoading(false);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Image src={bgWeather} layout="fill" alt="Spinner" />
        <div className="absolute top-0 left-0 right-0 bottom-0 p-2 bg-black/40 z-[6]">
          <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
            >
              <div class="w-full mb-2">
                <div class="flex justify-center">
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Search City"
                    class=" w-full border rounded items-center bg-transparent border-none text-white focus:outline-none text-3xl"
                  />
                  <button onClick={fetchWeather}>
                    <BsSearch size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Weather */}
          {weather.main && <Weather data={weather} />}
        </div>
      </>
    );
  }
}
