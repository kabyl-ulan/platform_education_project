import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import logo from '../../image/logo.png'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  const history = useNavigate()
  const navigate = () => {
    history('sign-in')
  }

  const [click, setClick] = useState(false)
  console.log(click)

  const handleChange = () => {
    setClick(!click)
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
          <button className="header__sign-in" onClick={navigate}>
            <AiOutlineUser />
            Войти
          </button>

          <button className={'header__hamburger'} onClick={handleChange}>
            <span
              className={'line line-top'}
              style={{
                transform: click ? 'rotate(45deg)' : '',
                background: click ? 'red' : '',
              }}
            ></span>
            <span
              className={'line line-middle'}
              style={{
                opacity: click ? '0' : '',
              }}
            ></span>
            <span
              className={'line line-bottom'}
              style={{
                transform: click ? 'rotate(-45deg)' : '',
                background: click ? 'red' : '',
              }}
            ></span>
          </button>
          <BurgerMenu click={click} setClick={setClick} />
        </div>
      </div>
    </header>
  )
}

export default Header
