import Icon from "../Icon/Icon"
import { ReactComponent as HeaderLogo } from '../../assets/images/logo.svg'
import Menu from "../Menu/Menu"

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <Icon text="WeatherCheck">
          <HeaderLogo />
        </Icon>
      </div>
      <Menu />
    </header>
  )
}

export default Header