import React, { useCallback, useEffect, useMemo } from "react";
import cloud from '../../assets/images/WeatherTypes/Sun-cloud-mid-rain.svg';
import { apiKey } from "../../assets/ts/apiKey";
import DefaultCity, { DefaultCityType } from "./includes/DefaultCity/DefaultCity";

const DefaultCities: React.FC = () => {
  const cities: DefaultCityType[] = [
    { name: 'Москва', degrees: null, image: cloud },
    { name: 'Париж', degrees: null, image: cloud },
    { name: 'Лондон', degrees: null, image: cloud },
    { name: 'Нью-Йорк', degrees: null, image: cloud },
    { name: 'Пекин', degrees: null, image: cloud },
    { name: 'Токио', degrees: null, image: cloud },
  ]

  // const getDefaultCitiesWeather = () => {
  //   return cities.map(city => {
  //     const xml = new XMLHttpRequest()
  //     xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${city.name}&units=metric&appid=${apiKey}`)
  //     xml.responseType = 'json'

  //     xml.onload = () => {
  //       console.log(cities)
  //       return { ...city, degrees: xml.response.main.temp }
  //       // city.degrees = xml.response.main.temp
  //     }
  //     xml.send()
  //   })
  // }

  // let processedCities = getDefaultCitiesWeather()

  return (
    <div className="DefaultCities">
      {cities.map((city, i) => <DefaultCity info={city} key={i} />)}
    </div>
  )
}

export default DefaultCities