import React from "react";
import { Link, useLocation } from "react-router-dom";
import { weatherTypes } from "../../../../assets/ts/weatherTypes";

export interface DefaultCityType {
  name: string;
  degrees: number | null;
  image: string | null;
}

interface Props {
  info: DefaultCityType
}

const DefaultCity: React.FC<Props> = ({ info }) => {
  const currentLocation = useLocation()

  return (
    <div className="DefaultCity">
      {info.degrees && info.image &&
        <>
          <Link
            to={{
              pathname: `/single-city/${info.name}`,
              state: { from: currentLocation.pathname }
            }}
            className="DefaultCity__Link"
          ></Link>
          <p className="DefaultCity__name">{info.name}</p>
          <p className="DefaultCity__degrees">{Math.round(info.degrees)}°</p>
          <div className="DefaultCity__image">
            {
              weatherTypes.find(item => item.type === info.image)?.image
            }
          </div>
        </>
      }
    </div>
  )
}

export default DefaultCity