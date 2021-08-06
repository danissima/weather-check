import Icon from "../Icon/Icon"
import { ReactComponent as HeaderLogo } from '../../assets/images/logo.svg'
import { ReactComponent as ArrowBack } from '../../assets/images/arrow-left.svg'
import Menu from "../Menu/Menu"
import { Link, useLocation } from "react-router-dom"

interface Props {
  allowReturn: boolean | undefined;
}

const Header: React.FC<Props> = (props) => {
  const currentLocation = useLocation()

  return (
    <header className={`Header ${props.allowReturn ? 'Header_allow-return' : ''}`}>
      <div className="Header__logo">
        <Icon text="WeatherCheck">
          <HeaderLogo />
        </Icon>
      </div>
      <div className="Header__back">
        <Link to={`${currentLocation.state}`}>
          <Icon>
            <ArrowBack />
          </Icon>
        </Link>
      </div>
      <Menu />
    </header>
  )
}

export default Header