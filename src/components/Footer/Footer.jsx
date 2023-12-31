import React from "react";
import "./Footer.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Time from "../Time/Time";
import AppsFooter from "../AppsFooter/AppsFooter";

export default function Footer({open}) {
  return (
    <footer>
      <div className="child">
        <WeatherInfo />
      </div>
      <div className="child">
        <AppsFooter click={open}/>
      </div>
      <div className="child">
        <Time />
      </div>
    </footer>
  );
}
