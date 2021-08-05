import React from "react";
import cloud from '../../assets/images/WeatherTypes/Sun-cloud-mid-rain.png';
import DefaultCity from "./includes/DefaultCity/DefaultCity";

const DefaultCities: React.FC = () => {
  const cities = [
    { name: 'Москва', degrees: '-13°', image: cloud },
    { name: 'Москва', degrees: '-13°', image: cloud },
    { name: 'Москва', degrees: '-13°', image: cloud },
    { name: 'Москва', degrees: '-13°', image: cloud },
    { name: 'Москва', degrees: '-13°', image: cloud },
  ]

  return (
    <div className="DefaultCities">
      {cities.map((city, i) =>  <DefaultCity info={city} key={i} /> )}
    </div>
  )
}

export default DefaultCities