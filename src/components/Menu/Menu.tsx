import React from "react"
import MenuItem, { MenuItemType } from "./includes/MenuItem"
import { ReactComponent as HomeActive } from "../../assets/images/Menu/Home/active.svg"
import { ReactComponent as HomeDisabled } from "../../assets/images/Menu/Home/disabled.svg"
import { ReactComponent as HistoryActive } from "../../assets/images/Menu/History/active.svg"
import { ReactComponent as HistoryDisabled } from "../../assets/images/Menu/History/disabled.svg"
import { ReactComponent as InfoActive } from "../../assets/images/Menu/Info/active.svg"
import { ReactComponent as InfoDisabled } from "../../assets/images/Menu/Info/disabled.svg"

const Menu: React.FC = () => {
  const menuItems: MenuItemType[] = [
    { title: 'Главная', icon: { active: <HomeActive />, disabled: <HomeDisabled /> }, to: '/' },
    { title: 'История', icon: { active: <HistoryActive />, disabled: <HistoryDisabled /> }, to: '/history' },
    { title: 'О приложении', icon: { active: <InfoActive />, disabled: <InfoDisabled /> }, to: '/about' }
  ]

  return (
    <div className="Menu">
      <div className="Menu__content">
        {menuItems.map((item, i) => {
          return (
            <MenuItem
              menuTo={item.to}
              itemTitle={item.title}
              key={i}
              icon={item.icon}
            />)
        })}
      </div>
    </div>
  )
}

export default Menu