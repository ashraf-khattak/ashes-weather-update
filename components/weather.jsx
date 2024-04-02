import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log("🚀 ~ Weather ~ data:", data);

  // Function to convert fahrenheit To Celsius
  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  // Function to convert UNIX timestamp to readable time in AM/PM format
  const unixTimestampToTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
    const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
    return formattedHours + ":" + minutes.substr(-2) + " " + ampm;
  };

  // Function to convert wind speed from MPH to km/h
  const mphToKmh = (mph) => {
    return mph * 1.60934;
  };

  return (
    <div className="relative flex flex-col justify-between max-w-[900px] w-full h-[80vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="bg-black/50 relative p-3 rounded-md">
        <div className="text-center pt-5">
          <p className="text-5xl text-center pb-6">{data.name}</p>
          <p className="text-9xl">
            {fahrenheitToCelsius(data.main.temp).toFixed(0)}
            <span className="text-6xl">&#176;c</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].description}</p>
        </div>
        <div className="flex justify-between text-center pt-3">
          <div>
            <p className=" text-1xl">
              Feels Like :{" "}
              <span className="font-bold text-1xl">
                {fahrenheitToCelsius(data.main.feels_like).toFixed(0)}
              </span>
            </p>
            <p className=" text-1xl">
              Humidity :{" "}
              <span className="font-bold text-1xl">{data.main.humidity}%</span>
            </p>
            <p className=" text-1xl">
              Winds :{" "}
              <span className="font-bold text-1xl">
                {mphToKmh(data.wind.speed).toFixed(0)} km/h
              </span>
            </p>
          </div>
          <div>
            <p className="font-bold text-1xl">
              sunrise : {unixTimestampToTime(data.sys.sunrise)}
            </p>
            <p className="font-bold text-1xl">
              sunset : {unixTimestampToTime(data.sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
