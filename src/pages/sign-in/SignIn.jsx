import React from 'react'
import singIn from '../../image/singIn.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section id="sing-in">
      <div className="container">
        <div className="sing-in">
          <div className="sing-in__theme">
            <img src={singIn} alt="" />
            <h1>SELF DEVELOPING SCHOOL</h1>
          </div>
          <div className="sing-in__block">
            <h1>Войти в аккаунт</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/come" className="sing-in__block--btn">
              <button>Войти</button>
            </Link>
            <a href="#">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
