import React from "react";
import "./Footer.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

export default function Footer() {
  return (
    <footer>
        <div className="child">
          <WeatherInfo/>
          
        </div>
        <div className="child"></div>
        <div className="child"></div>
    </footer>
  );
}
