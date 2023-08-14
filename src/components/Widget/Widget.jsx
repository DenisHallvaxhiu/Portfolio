import React, { useEffect, useState } from "react";
import "./Widget.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmog,
  faCloud,
  faTornado,
  faSun,
  faCloudMeatball,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

export default function Widget() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDayOfWeek = () => {
    const today = new Date();
    const indexOfDate = today.getDay();
    return `${daysOfWeek[indexOfDate]}`;
  };
  const getTimeString = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    const formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${amOrPm}`;
    return formattedTime;
  };
  const [currentTime, setCurrentTime] = useState(getTimeString());
  const getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${month}/${day}/${year}`;
  };

  const updateTime = () => {
    setCurrentTime(getTimeString());
  };
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  });

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "0fdd2b72504fbc8706040b30ab60441e";
  const city = "Boston";

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    getWeatherData();
  }, [apiKey, city]);

  const convertKelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };
  const iconPicker = (desc) => {
    const lowerCaseDesc = desc.toLowerCase();

    if (weatherData.weather === null) {
      return;
    }

    if (lowerCaseDesc === "clear sky") {
      return <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />;
    } else if (
      lowerCaseDesc === "few clouds" ||
      lowerCaseDesc === "scattered clouds"
    ) {
      return <FontAwesomeIcon icon={faCloudSun} style={{ color: "#ffffff" }} />;
    } else if (
      lowerCaseDesc === "broken clouds" ||
      lowerCaseDesc === "overcast clouds"
    ) {
      return <FontAwesomeIcon icon={faCloud} style={{ color: "#ffffff" }} />;
    } else if (
      lowerCaseDesc === "light rain" ||
      lowerCaseDesc === "moderate rain"
    ) {
      return (
        <FontAwesomeIcon icon={faCloudSunRain} style={{ color: "#ffffff" }} />
      );
    } else if (
      lowerCaseDesc === "heavy intensity rain" ||
      lowerCaseDesc === "thunderstorm with rain"
    ) {
      return (
        <FontAwesomeIcon
          icon={faCloudShowersHeavy}
          style={{ color: "#ffffff" }}
        />
      );
    } else if (
      lowerCaseDesc === "light snow" ||
      lowerCaseDesc === "moderate snow" ||
      lowerCaseDesc === "heavy snow"
    ) {
      return (
        <FontAwesomeIcon icon={faSnowflake} style={{ color: "#ffffff" }} />
      );
    } else if (
      lowerCaseDesc === "light shower rain" ||
      lowerCaseDesc === "heavy intensity shower rain"
    ) {
      return (
        <FontAwesomeIcon icon={faCloudRain} style={{ color: "#ffffff" }} />
      );
    } else if (lowerCaseDesc === "shower rain and snow") {
      return (
        <FontAwesomeIcon icon={faCloudMeatball} style={{ color: "#ffffff" }} />
      );
    } else if (
      lowerCaseDesc === "mist" ||
      lowerCaseDesc === "smoke" ||
      lowerCaseDesc === "haze" ||
      lowerCaseDesc === "dust" ||
      lowerCaseDesc === "fog" ||
      lowerCaseDesc === "sand" ||
      lowerCaseDesc === "ash"
    ) {
      return <FontAwesomeIcon icon={faSmog} style={{ color: "#ffffff" }} />;
    } else if (lowerCaseDesc === "squalls" || lowerCaseDesc === "tornado") {
      return <FontAwesomeIcon icon={faTornado} style={{ color: "#ffffff" }} />;
    } else {
      return "Weather description not recognized.";
    }
  };


  let iconElement;
  if (weatherData) {
    iconElement = iconPicker(weatherData.weather[0].description);
  }

  return (
    <>
      <div className="widget-container">
        {weatherData && (
          <div className="widget">
            <div className="time">
              <h1>{currentTime}</h1>
              <div>
                <h2>{getDateString()}</h2>
                <h2>{getDayOfWeek()}</h2>
              </div>
            </div>
            <div className="weather">
              <h5>{convertKelvinToCelsius(weatherData.main.temp)}°C</h5>
              {iconElement}
              </div>
          </div>
        )}
      </div>
    </>
  );
}
