import React, { useCallback, useEffect, useMemo, useState } from "react";
import { apiKey } from "../../assets/ts/apiKey";
import DefaultCity, { DefaultCityType } from "./includes/DefaultCity/DefaultCity";

const DefaultCities: React.FC = () => {
  const cities: DefaultCityType[] = useMemo(() => {
    return [
      { name: 'Москва', degrees: null, image: null},
      { name: 'Париж', degrees: null, image: null },
      { name: 'Лондон', degrees: null, image: null },
      { name: 'Нью-Йорк', degrees: null, image: null },
      { name: 'Пекин', degrees: null, image: null },
      { name: 'Токио', degrees: null, image: null },
    ]
  }, [])
  let [processedCities, setProcessedCities] = useState<DefaultCityType[]>([])

  const request = (city: DefaultCityType) => {
    return new Promise<DefaultCityType>((resolve) => {
      const xml = new XMLHttpRequest()
      xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${city.name}&units=metric&appid=${apiKey}`)
      xml.responseType = 'json'
      xml.onload = () => {
        resolve({ ...city, degrees: xml.response.main.temp, image: xml.response.weather[0].main })
      }
      xml.send()
    })
  }

  const getDefaultCitiesWeather = useCallback(() => {
    cities.forEach(city => {
      request(city).then((changedCity) => {
        setProcessedCities((p) => [...p, changedCity])
      })
    })
  }, [cities])

  useEffect(() => {
    getDefaultCitiesWeather()
  }, [getDefaultCitiesWeather])

  return (
    <div className="DefaultCities">
      {processedCities.map((city, i) => <DefaultCity info={city} key={i} />)}
    </div>
  )
}

export default DefaultCities