import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import logo from '../../image/logo.png'

const Header = () => {
  const history = useNavigate()
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <nav className="header__nav">
            <NavLink to="/" className="nav-a">
              <h1>Главная</h1>
            </NavLink>
            <NavLink to="/our-courses" className="nav-a">
              <h1>Наши курсы</h1>
            </NavLink>
            <NavLink to="/about" className="nav-a">
              <h1>О нас</h1>
            </NavLink>
          </nav>
          <button onClick={() => history('sign-in')}>
            <AiOutlineUser />
            Войти
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
