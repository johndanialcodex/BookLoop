import { Link } from 'react-router-dom'
import "../styles/Header.css"
import logo from "../assets/Logo2.png"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="BookLoop Logo" className="header__logo" />
      <nav className="header__nav">
        <p><Link to="/login" className="header__link">Login</Link></p>
      </nav>
    </header>
  )
}

export default Header