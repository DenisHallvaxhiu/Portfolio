import React, { useState } from 'react'
import axios from 'axios';

export default function WeatherInfo() {

    const [weatherData,setWeatherData] = useState(null)
    const apiKey = process.env.WEATHER_API_KEY

  return (
    <div>WeatherInfo</div>
  )
}
