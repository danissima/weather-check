import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as Cloud } from '../../assets/images/WeatherTypes/Sun-cloud-mid-rain.svg'
import { ReactComponent as Barometer } from '../../assets/images/barometer.svg'
import Icon from "../../components/Icon/Icon";
import { useLocation, useParams } from "react-router-dom";
import { apiKey } from "../../assets/ts/apiKey";
import { addHistoryCity, capitalizeFirstLetter, getSunriseOrSunset, toTime } from "../../assets/ts/functions";
import { LocationType } from "../../components/Menu/includes/MenuItem";

interface pathParamsType {
  city: string;
}

interface weatherResult {
  name: string;
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    pressure: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  }
}

const SingleCity: React.FC = () => {
  const pathParams = useParams<pathParamsType>()
  const [weatherNow, setWeatherNow] = useState<weatherResult>()
  const currentLocation = useLocation<LocationType>()

  const getWeatherNow = useCallback(() => {
    let xml = new XMLHttpRequest()
    xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${pathParams.city}&units=metric&appid=${apiKey}`)
    xml.responseType = 'json'
    xml.onload = () => {
      setWeatherNow(xml.response)
      if (currentLocation.state && currentLocation.state.search) {
        addHistoryCity({ name: xml.response.name, degrees: xml.response.main.temp, time: toTime(Date.now()) })
      }
      console.log(xml.response)
    }
    xml.send()
  }, [pathParams.city, currentLocation.state])

  useEffect(() => {
    getWeatherNow()
  }, [getWeatherNow])

  return (
    <div className="SingleCity">
      {weatherNow &&
        <>
          <h2 className="SingleCity__title">{weatherNow.name}</h2>
          <h3 className="SingleCity__subtitle">{capitalizeFirstLetter(weatherNow.weather[0].description)}</h3>
          <div className="SingleCity__info">
            <p className="SingleCity__degrees">{`${Math.round(weatherNow.main.temp)}°`}</p>
            <div className="SingleCity__image">
              <Cloud />
            </div>
          </div>
          <Icon text={`${weatherNow.main.pressure} мм рт. ст.`}>
            <Barometer />
          </Icon>
          <p className="SingleCity__sun">{getSunriseOrSunset(weatherNow.sys.sunrise, weatherNow.sys.sunset)}</p>
        </>
      }
    </div>
  )
}

export default SingleCity