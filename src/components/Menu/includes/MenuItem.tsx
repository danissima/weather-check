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

interface Props {
  itemTitle: string;
  menuTo: string;
  icon: {
    active: React.ReactElement;
    disabled: React.ReactElement;
  }
}

const MenuItem: React.FC<Props> = (props) => {
  const currentLocation = useLocation()

  return (
    <div className="MenuItem">
      <Link to={props.menuTo}></Link>
        <Icon
          text={props.itemTitle}
          disabledText={currentLocation.pathname !== props.menuTo && props.menuTo !== currentLocation.state}
        >
          {currentLocation.pathname === props.menuTo || props.menuTo === currentLocation.state ? props.icon.active : props.icon.disabled}
        </Icon>
    </div>
  )
}

export default MenuItem