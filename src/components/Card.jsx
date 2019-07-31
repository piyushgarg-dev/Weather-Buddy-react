import React from "react";
import { useEffect } from "react";
import "./cardcss.css";

const Card = ({ info }) => {
  //(32°F − 32) × 5/9 = 0°C
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const city = info.name;
  const country = info.sys.country;
  const temp = Math.round(info.main.temp - 273);
  const description = capitalizeFirstLetter(info.weather[0].description);
  const humidity = info.main.humidity;
  const wind = info.wind.speed;
  const temp_min = Math.round(info.main.temp_min - 273);
  const temp_max = Math.round(info.main.temp_max - 273);

  useEffect(() => {
    console.log("Card", info);
  });

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="weather-card one">
            <div class="top">
              <div class="wrapper">
                <div class="mynav">
                  <a href="javascript:;">
                    <span class="lnr lnr-chevron-left" />
                  </a>
                  <a href="javascript:;">
                    <span class="lnr lnr-cog" />
                  </a>
                </div>
                <h1 class="heading">{description}</h1>
                <h3 class="location">
                  {city},{country}
                </h3>
                <p class="temp">
                  <span class="temp-value">{temp}</span>
                  <span class="deg">0</span>
                  <a href="javascript:;">
                    <span class="temp-type">C</span>
                  </a>
                </p>
                <h3 class="location">
                  Minimum : {temp_min} and Maximum : {temp_max}{" "}
                </h3>
                <h3 class="location">Humidity : {humidity}</h3>
                <h4 class="location">Developed By <a class=" btn btn-info" href="https://github.com/piyushgarg195">Piyush Garg</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Card;
