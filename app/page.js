"use client"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

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
    })
 
    setCity('')
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ashes Weather</h1>
      <button onClick={fetchWeather}>click me</button>
    </main>
  );
}




// "use client";

// import axios from "axios";
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
