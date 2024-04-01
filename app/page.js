"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

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

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[6]">
      <Image
        src="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        className="object-cover"
      />
      <div className="relative flex justify-between items-center ">
        <form>
          <div>
            <input type="text" placeholder="Search City" />
          </div>
          <button onClick={fetchWeather}><BsSearch /></button>
        </form>
      </div>
    </div>
  );
}

// "use client";

// import axios from "axios";z
// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState({});
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
//     axios.get(url).then((response) => {
//       setWeather(response.data);
//       setLoading(false);
//     }).catch(error => {
//       console.error('Error fetching weather data:', error);
//       setLoading(false);
//     });
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>Ashes Weather</h1>
//       <form onSubmit={fetchWeather}>
//         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
//         <button type="submit">Get Weather</button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {weather.main && (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>Temperature: {weather.main.temp}</p>
//           {/* Additional weather data can be displayed here */}
//         </div>
//       )}
//     </main>
//   );
// }
