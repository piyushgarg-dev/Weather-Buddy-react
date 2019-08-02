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
 
  const temp_min = Math.round(info.main.temp_min - 273);
  const temp_max = Math.round(info.main.temp_max - 273);

  useEffect(() => {
    
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="weather-card one">
            <div className="top">
              <div className="wrapper">
                <div className="mynav">
                  <a>
                    <span className="lnr lnr-chevron-left" />
                  </a>
                  <a href="">
                    <span className="lnr lnr-cog" />
                  </a>
                </div>
                <h1 className="heading">{description}</h1>
                <h3 className="location">
                  {city},{country}
                </h3>
                <p className="temp">
                  <span className="temp-value">{temp}</span>
                  <span className="deg">0</span>
                  <a href="">
                    <span className="temp-type">C</span>
                  </a>
                </p>
                <h3 className="location">
                  Minimum : {temp_min} and Maximum : {temp_max}{" "}
                </h3>
                <h3 className="location">Humidity : {humidity}</h3>
                <h4 className="location">Developed By <a className=" btn btn-info" href="https://github.com/piyushgarg195">Piyush Garg</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Card;
