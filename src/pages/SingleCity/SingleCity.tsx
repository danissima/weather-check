import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as Barometer } from '../../assets/images/barometer.svg'
import Icon from "../../components/Icon/Icon";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { apiKey } from "../../assets/ts/apiKey";
import { addHistoryCity, capitalizeFirstLetter, getSunriseOrSunset, toTime } from "../../assets/ts/functions";
import { LocationType } from "../../components/Menu/includes/MenuItem";
import { weatherTypes } from "../../assets/ts/weatherTypes";
import axios from "axios";

interface pathParamsType {
  city: string;
}

interface weatherResult {
  cod: number;
  name: string;
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    pressure: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}

const SingleCity: React.FC = () => {
  const history = useHistory()
  const pathParams = useParams<pathParamsType>()
  const [weatherNow, setWeatherNow] = useState<weatherResult>()
  const [isLoading, setIsLocading] = useState<boolean>(true)
  const currentLocation = useLocation<LocationType>()

  const getWeatherNow = useCallback(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lang: 'ru',
        q: pathParams.city,
        units: 'metric',
        appid: apiKey
      }
    })
      .then(response => {
        console.log(response.data)
        if (response.data.cod === 200) {
          setWeatherNow(response.data)
          if (currentLocation.state && currentLocation.state.search) {
            addHistoryCity({ name: response.data.name, degrees: response.data.main.temp, time: toTime(Date.now()) })
          }
        } else {
          history.push(`/${response.data.message.replace(/\s/g, '-')}`)
        }
      })
      .catch(() => {
        // history.push('/city-not-found')
        setWeatherNow(undefined)
        setIsLocading(false)
      })
  }, [pathParams.city, currentLocation.state, history])

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
            <p className="SingleCity__degrees">{Math.round(weatherNow.main.temp)}°</p>
            <div className="SingleCity__image">
              {
                weatherTypes.find(item => item.type === weatherNow.weather[0].main)?.image
              }
            </div>
          </div>
          <Icon text={`${weatherNow.main.pressure} мм рт. ст.`}>
            <Barometer />
          </Icon>
          <p className="SingleCity__sun">{getSunriseOrSunset(weatherNow.sys.sunrise, weatherNow.sys.sunset, weatherNow.timezone)}</p>
        </>
      }
      {!weatherNow && !isLoading &&
        <div className="SingleCity__error">
          <h2>Упс... Не можем найти город {pathParams.city}</h2>
          <p><Link to="/">Вернуться домой</Link></p>
        </div>
      }
    </div>
  )
}

export default SingleCity