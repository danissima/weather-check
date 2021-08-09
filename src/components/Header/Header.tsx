import Icon from "../Icon/Icon"
import { ReactComponent as HeaderLogo } from '../../assets/images/logo.svg'
import { ReactComponent as ArrowBack } from '../../assets/images/arrow-left.svg'
import Menu from "../Menu/Menu"
import { useHistory } from "react-router-dom"

interface Props {
  allowReturn: boolean | undefined;
}

const Header: React.FC<Props> = (props) => {
  const history = useHistory()

  return (
    <header className={`Header ${props.allowReturn ? 'Header_allow-return' : ''}`}>
      <div className="Header__logo">
        <Icon text="WeatherCheck">
          <HeaderLogo />
        </Icon>
      </div>
      <div onClick={() => history.goBack()} className="Header__back">
        <Icon>
          <ArrowBack />
        </Icon>
      </div>
      <Menu />
    </header>
  )
}

export default Header