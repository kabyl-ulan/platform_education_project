import React from 'react'
import logo from "../../image/logo.png"
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs'
import {FiMail, FiYoutube} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {HiPhone} from 'react-icons/hi'
import {BiMap} from 'react-icons/bi'
import {TbNumbers} from 'react-icons/tb'
import {Link, NavLink} from 'react-router-dom'
import visa from '../../image/visa.png'
import master from '../../image/master-card.png'


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer--general">

            <div className="footer--general__one">
              <img src={logo} alt=""/>
              <select>
                <option>Ru</option>
                <option>Eng</option>
              </select>
            </div>

            <div className="footer--general__two">
              <h1>Быстрые ссылки</h1>
              <div className="footer--general__two--nav">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/ourcourse">Школа</NavLink>
                <NavLink to="/about">О нас</NavLink>
              </div>


            </div>

            <div className="footer--general__three">
              <h1>Социальные сети</h1>

              <div className="footer--general__three--nav">
                <div>
                  <BsInstagram/>
                </div>
                <div>
                  <FiYoutube/>
                </div>
                <div>
                  <BsFacebook/>
                </div>
                <div>
                  <BsTwitter/>
                </div>
                <div>
                  <FaTiktok/>
                </div>
                <div>
                  <BsWhatsapp/>
                </div>
                <div>
                  <BsTelegram/>
                </div>
              </div>
            </div>

            <div className="footer--general__four">
              <h1>Контакты</h1>
              <div className="footer--general__four--nav">
                <div>
                  <HiPhone/>
                </div>
                <Link to={`tel: +996500032640`}>0500 678 876</Link>
              </div>

              <div className="footer--general__four--nav">
                <div>
                  <FiMail/>
                </div>
                <Link to={`mailto: self_dev_school@gmail.com`}>
                  Self_dev_school@gmail.com
                </Link>
              </div>
            </div>

            <div className="footer--general__five">
              <h1>Адресс</h1>
              <div className="footer--general__five--nav">
                <div>
                  <BiMap/>
                </div>
                <Link to={'/'}>
                  ИП Сейсембай, г.Алматы, мкр. Нурлытау, ул. Мерген, 93.
                </Link>
              </div>
              <div className="footer--general__five--nav">
                <div>
                  <TbNumbers/>
                </div>
                <Link to={''}>Идентификационный код: 661102300013</Link>
              </div>
            </div>
          </div>

          <div className="footer--img">
            <img src={visa} alt=""/>
            <img src={master} alt=""/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
