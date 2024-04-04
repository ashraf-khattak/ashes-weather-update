"use client";
import React, { useState, useEffect } from "react";
import Weather from "@/components/weather";
import axios from "axios";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import bgWeather from "../public/images/bgWeather.jpg";
import Spinner from "@/components/spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [error, setError] = useState(false); // Initialize error state

  useEffect(() => {
    // Fetch weather for default city when component mounts
    fetchWeatherForCity("Islamabad"); // You can change "Islamabad" to any default city you prefer
  }, []); // Empty dependency array to ensure this effect runs only once when component mounts

  const fetchWeatherForCity = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setLoading(true); // Set loading to true before making the request
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false); // Set loading to false after receiving the response
        setError(false); // Reset error state if the request succeeds
        console.log("🚀 ~ axios.get ~ response.data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false); // Set loading to false in case of an error
        setError(true); // Set error state to true
        setCity("Islamabad"); // Set default city in case of an error
      });
  };

  const fetchWeather = (e) => {
    e.preventDefault();
    fetchWeatherForCity(city);
    setCity("");
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Image src={bgWeather} layout="fill" alt="Spinner" />
        <div className="bg-black/50 relative p-5">
          <div className="bg-black/50 relative rounded-3xl">
          <h1 className="text-5xl text-center text-white ">Ashes Khan</h1>
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
        </div>
      </>
    );
  }
}

// import Weather from "@/components/weather";
// import axios from "axios";
// import Image from "next/image";
// import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import bgWeather from "../public/images/bgWeather.jpg";
// import Spinner from "@/components/spinner";

// export default function Home() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState({});
//   const [loading, setLoading] = useState(false);

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
//   // console.log(url);
//   const fetchWeather = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     axios.get(url).then((response) => {
//       setWeather(response.data);
//       console.log("🚀 ~ axios.get ~ response.data:", response.data);
//     });

//     setCity("");
//     setLoading(false);
//   };
//   if (loading) {
//     return <Spinner />;
//   } else {
//     return (
//       <>
//         <Image src={bgWeather} layout="fill" alt="Spinner" />

//         <div className="absolute top-0 left-0 right-0 bottom-0 p-2 bg-black/40 z-[6]">
//         <h1 className="text-5xl text-center text-white">Ashes Khan</h1>
//           <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
//             <form
//               onSubmit={fetchWeather}
//               className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
//             >
//               <div class="w-full mb-2">
//                 <div class="flex justify-center">
//                   <input
//                     onChange={(e) => setCity(e.target.value)}
//                     type="text"
//                     placeholder="Search City"
//                     class=" w-full border rounded items-center bg-transparent border-none text-white focus:outline-none text-3xl"
//                   />
//                   <button onClick={fetchWeather}>
//                     <BsSearch size={20} />
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           {/* Weather */}
//           {weather.main && <Weather data={weather} />}
//         </div>
//       </>
//     );
//   }
// }
