import React, { useState } from 'react';
const api = {
  key: "686b26bd01aaf6d6beeda3a45a4ec1eb",
  base: "http://api.openweathermap.org/data/2.5/"
}
function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="City.."
          />
        </div>
        <div className="location-box">
          <div className="location">Nagpur, India</div>
          <div className="date"> {dateBuilder(new Date())} </div>
          <div className="weather-box">
            <div className="temp">
              27°C
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
