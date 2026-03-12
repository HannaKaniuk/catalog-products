import { ICONS } from '../constants/icons'

export function Header() {
  return (
    <header className="topbar">
      <div className="topbar__logo">
        <img src={ICONS.logo} alt="AQVEX" className="topbar__logo-img" />
      </div>
    </header>
  )
}
