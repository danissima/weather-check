import React, { Suspense, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "../../assets/ts/apiKey";
import { addDefaultCity } from "../../redux/appSlice";
import { RootState } from "../../redux/rootReducer";
import { DefaultCityType } from "./includes/DefaultCity/DefaultCity";
const DefaultCity = React.lazy(() => import('./includes/DefaultCity/DefaultCity'))

const DefaultCities: React.FC = () => {
  const reduxDefaultCities = useSelector((state: RootState) => state.app.defaultCities)
  const dispatch = useDispatch()
  const cities: DefaultCityType[] = useMemo(() => {
    return [
      { name: 'Москва', degrees: null, image: null },
      { name: 'Париж', degrees: null, image: null },
      { name: 'Лондон', degrees: null, image: null },
      { name: 'Нью-Йорк', degrees: null, image: null },
      { name: 'Пекин', degrees: null, image: null },
      { name: 'Токио', degrees: null, image: null },
    ]
  }, [])

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
    if (!reduxDefaultCities[0]) {
      cities.forEach(city => {
        request(city).then((changedCity) => {
          dispatch(addDefaultCity(changedCity))
        })
      })

    }
  }, [cities, reduxDefaultCities, dispatch])

  useEffect(() => {
    getDefaultCitiesWeather()
  }, [getDefaultCitiesWeather])

  return (
    <div className="DefaultCities">
      {reduxDefaultCities.map((city, i) => {
        return (
          <Suspense key={`${i}2`} fallback={<p>Loading...</p>} >
            <DefaultCity info={city} />
          </Suspense>
        )
      })}
    </div>
  )
}

export default DefaultCities