import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import logo from '../../image/logo.png'

const Header = () => {
  const history = useNavigate()
  const navigate = () => {
    history('/sign-in')
  }

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <nav className="header__nav">
            <NavLink to="/" className="nav-a">
              <span>Главная</span>
            </NavLink>
            <NavLink to="/our-courses" className="nav-a">
              <span>Наши курсы</span>
            </NavLink>
            <NavLink to="/about" className="nav-a">
              <span>О нас</span>
            </NavLink>
          </nav>
          <button onClick={navigate}>
            <AiOutlineUser />
            Войти
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
