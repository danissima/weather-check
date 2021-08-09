import React from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "../../Icon/Icon"

export type MenuItemType = {
  title: string;
  icon: {
    active: React.ReactElement;
    disabled: React.ReactElement;
  };
  to: string;
}

export interface LocationType {
  from: string;
  search?: boolean;
}

const MenuItem: React.FC<MenuItemType> = (props) => {
  const currentLocation = useLocation<LocationType>()
  const prevLocation = currentLocation.state ? currentLocation.state.from : null

  return (
    <div className="MenuItem">
      <Link to={props.to}></Link>
      <Icon
        text={props.title}
        disabledText={currentLocation.pathname !== props.to && props.to !== prevLocation}
      >
        {currentLocation.pathname === props.to || props.to === prevLocation ? props.icon.active : props.icon.disabled}
      </Icon>
    </div>
  )
}

export default MenuItem