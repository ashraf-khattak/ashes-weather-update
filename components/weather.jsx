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

  // Function to format UNIX timestamp to a human-readable date
  const formatUnixTimestampToDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative flex flex-col justify-between max-w-[900px] w-full  m-auto p-4 text-gray-300 z-10 ">
      {/* Top */}
      <div className=" relative p-5 rounded-3xl">
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
              {formatUnixTimestampToDate(data.dt)}
            </p>
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

// import Image from "next/image";
// import React from "react";
// import bgWeather from "../public/images/bgWeather.jpg";
// import next from "../public/next.svg";

// const Weather = ({ data }) => {
//   console.log("🚀 ~ Weather ~ data:", data);

//   // Function to convert fahrenheit To Celsius
//   const fahrenheitToCelsius = (fahrenheit) => {
//     return ((fahrenheit - 32) * 5) / 9;
//   };

//   // Function to convert UNIX timestamp to readable time in AM/PM format
//   const unixTimestampToTime = (unixTimestamp) => {
//     const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
//     const hours = date.getHours();
//     const minutes = "0" + date.getMinutes();
//     const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
//     const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
//     return formattedHours + ":" + minutes.substr(-2) + " " + ampm;
//   };

//   // Function to convert wind speed from MPH to km/h
//   const mphToKmh = (mph) => {
//     return mph * 1.60934;
//   };

//   // Define the image source based on weather description
//   const imageSource =
//     data.weather[0].description === "few clouds" ? (
//       <Image src={next} layout="fill" alt="next" />
//     ) : (
//       <Image src={bgWeather} layout="fill" alt="Spinner" />
//     );

//   return (
//     <div className="relative flex flex-col justify-between max-w-[900px] w-full  m-auto p-4 text-gray-300 z-10 ">
//       {/* Top */}
//       <div className=" relative p-5 rounded-3xl">
//         <div className="text-center pt-5">
//           <p className="text-5xl text-center pb-6">{data.name}</p>
//           <p className="text-9xl">
//             {fahrenheitToCelsius(data.main.temp).toFixed(0)}
//             <span className="text-6xl">&#176;c</span>
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           {imageSource}
//           <p className="text-2xl">{data.weather[0].description}</p>
//         </div>
//         <div className="flex justify-between text-center pt-3">
//           <div>
//             <p className=" text-1xl">
//               Feels Like :{" "}
//               <span className="font-bold text-1xl">
//                 {fahrenheitToCelsius(data.main.feels_like).toFixed(0)}
//               </span>
//             </p>
//             <p className=" text-1xl">
//               Humidity :{" "}
//               <span className="font-bold text-1xl">{data.main.humidity}%</span>
//             </p>
//             <p className=" text-1xl">
//               Winds :{" "}
//               <span className="font-bold text-1xl">
//                 {mphToKmh(data.wind.speed).toFixed(0)} km/h
//               </span>
//             </p>
//           </div>
//           <div>
//             <p className="font-bold text-1xl">
//               sunrise : {unixTimestampToTime(data.sys.sunrise)}
//             </p>
//             <p className="font-bold text-1xl">
//               sunset : {unixTimestampToTime(data.sys.sunset)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;
