import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherInfo.css";
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

export default function WeatherInfo() {
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
  const capitalizeWords = (sentence) => {
    const wordsToIgnore = ["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "from", "by", "in", "out", "of"];
    
    const capitalizeFirstLetter = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
  
    const words = sentence.split(" ");
    const capitalizedWords = words.map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      if (index === 0 || !wordsToIgnore.includes(lowerCaseWord)) {
        return capitalizeFirstLetter(word);
      }
      return word;
    });
  
    return capitalizedWords.join(" ");
  };

  let iconElement;
  if (weatherData) {
    iconElement = iconPicker(weatherData.weather[0].description);
  }

  return (
    <div>
      {weatherData && (
        <div className="weather">
          {iconElement}

          <div>
            <h5>
              {convertKelvinToCelsius(weatherData.main.temp)}°C
            </h5>
            <h5>{capitalizeWords(weatherData.weather[0].description)}</h5>
          </div>
        </div>
      )}
    </div>
  );
}
