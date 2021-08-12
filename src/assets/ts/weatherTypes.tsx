import { ReactComponent as Rain } from '../images/WeatherTypes/Big_rain_drops.svg'
import { ReactComponent as Snow } from '../images/WeatherTypes/Big_snow.svg'
import { ReactComponent as Drizzle } from '../images/WeatherTypes/Sun_cloud_little_rain.svg'
import { ReactComponent as Clear } from '../images/WeatherTypes/Clear.svg'
import { ReactComponent as Tornado } from '../images/WeatherTypes/Tornado.svg'
import { ReactComponent as Thunderstorm } from '../images/WeatherTypes/Cloud_zap.svg'
import { ReactComponent as Clouds } from '../images/WeatherTypes/Moon_cloud_fast_wind.svg'

export const weatherTypes = [
  { type: 'Thunderstorm', image: <Thunderstorm /> },
  { type: 'Drizzle', image: <Drizzle /> },
  { type: 'Rain', image: <Rain /> },
  { type: 'Snow', image: <Snow /> },
  { type: 'Clear', image: <Clear /> },
  { type: 'Clouds', image: <Clouds />},
  { type: 'Mist', image: <Tornado />},
  { type: 'Smoke', image: <Tornado />},
  { type: 'Haze', image: <Tornado />},
  { type: 'Dust', image: <Tornado />},
  { type: 'Fog', image: <Tornado />},
  { type: 'Sand', image: <Tornado />},
  { type: 'Ash', image: <Tornado />},
  { type: 'Squall', image: <Tornado />},
  { type: 'Tornado', image: <Tornado />},
]