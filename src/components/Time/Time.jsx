import React, { useEffect, useState } from "react";
import "./Time.css";

export default function Time() {
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
  return (
    <div className="time">
      <div>
        <p>{currentTime}</p>
        <p>{getDateString()}</p>
      </div>
    </div>
  );
}
