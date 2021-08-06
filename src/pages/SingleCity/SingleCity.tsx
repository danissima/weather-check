import React from "react";
import { ReactComponent as Cloud } from '../../assets/images/WeatherTypes/Sun-cloud-mid-rain.svg'
import { ReactComponent as Barometer } from '../../assets/images/barometer.svg'
import Icon from "../../components/Icon/Icon";

const SingleCity: React.FC = () => {
  return (
    <div className="SingleCity">
      <h2 className="SingleCity__title">Москва</h2>
      <h3 className="SingleCity__subtitle">Облачно с прояснениями</h3>
      <div className="SingleCity__info">
        <p className="SingleCity__degrees">-13°</p>
        <div className="SingleCity__image">
          <Cloud />
        </div>
      </div>
      <Icon text="756 мм рт. ст.">
        <Barometer />
      </Icon>
      <p className="SingleCity__sun">Закат в 18:00</p>
    </div>
  )
}

export default SingleCity