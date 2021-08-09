import React from "react";
import { Link, useLocation } from "react-router-dom";

export interface DefaultCityType {
  name: string;
  degrees: string | null;
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
          <p className="DefaultCity__degrees">{info.degrees}</p>
          <div className="DefaultCity__image">
            <img src={info.image} alt={info.degrees} />
          </div>
        </>
      }
    </div>
  )
}

export default DefaultCity