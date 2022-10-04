import React from 'react'
import {FiCheck} from 'react-icons/fi';


const Registration = () => {
  return (

      <section id="sing-up">
          <div className="container">
              <div className="sing-up">
                  <div className="sing-up__block">
                      <h1>Оформление подписки</h1>

                      <div className="sing-up__block--general">
                          <h2>ФИО</h2>
                          <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                      </div>
                      <div className="sing-up__block--general">
                          <h2>Електронная почта</h2>
                          <input type="text" placeholder="Muslim.Bolotoffical@gmail.com"/>
                      </div>
                      <div className="sing-up__block--general">
                          <h2>Номер телефона</h2>
                          <input type="text" placeholder="+996 770 55 74  47"/>
                      </div>
                      <div className="sing-up__block--general">
                          <h2>Промокод</h2>
                          <input type="text" placeholder="M83h82d"/>
                      </div>


                      <h2>Оплата</h2>
                      <div className="sing-up__block--pay">
                          <div className="sing-up__block--pay__visa">
                              <input type="radio" name="gender"/>
                              <h3>Visa</h3>
                          </div>
                          <div>
                              <input type="radio" name="gender"/>
                              <h3>Master Card</h3>
                          </div>
                      </div>

                      <div className="sing-up__block--gen">
                          <div className="sing-up__block--gen__card">
                              <h2>Номер карты</h2>
                              <input type="text" placeholder="1234 4567 7788 9210"/>
                          </div>
                          <div className="sing-up__block--gen__card">
                              <h2>Срок</h2>
                              <input type="text" placeholder="12/25" className="input"/>
                          </div>
                          <div className="sing-up__block--gen__card">
                              <h2>CVV</h2>
                              <input type="text" placeholder="398" className="input"/>
                          </div>
                      </div>

                      <h2>Уровень пакета</h2>

                      <div className="sing-up__block--packages">
                          <div className="sing-up__block--packages__number1">
                              <h1>Обычный</h1>
                              <div className="sing-up__block--packages__number1--radio">
                                  <input type="radio" name="gender"/>
                                  <h2>Ежемесячно</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--radio">

                                  <input type="radio" name="gender"/>
                                  <h2>Ежегодно</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Все новые статьи</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Все мастер классы по саморозвитию</h2>
                              </div>


                              <div className="center">
                                  <h5>Цена: 225$</h5>
                                  <button>Выбрать</button>
                              </div>
                          </div>

                          <div className="sing-up__block--packages__number1">
                              <h1>Обычный</h1>
                              <div className="sing-up__block--packages__number1--radio">
                                  <input type="radio" name="gender"/>
                                  <h2>Ежемесячно</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--radio">

                                  <input type="radio" name="gender"/>
                                  <h2>Ежегодно</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Все новые статьи</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Все мастер классы по саморозвитию</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Курс по чтению языка тела</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Курс по накоплению средств с выполотой долгов</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Курс по быстрому карьерному росту</h2>
                              </div>
                              <div className="sing-up__block--packages__number1--titles">
                                  <FiCheck/>
                                  <h2>Курс по одолеванию страха потери</h2>
                              </div>

                              <div className="flex">
                                  <h5>Цена: 500$</h5>
                                  <s><h1>750$</h1></s>
                              </div>
                              <div>
                                  <button className="btn2">Выбрано</button>
                              </div>
                          </div>


                      </div>
                      <div className="sing-up__block--pay-btn">
                          <button> Оплатить 500$</button>
                      </div>

                      <div className="sing-up__block--ready">
                          <input type="checkbox"/>
                          <h1>Я ознакомился и согласен с Условиями оказания услуг</h1>
                      </div>

                  </div>
              </div>
          </div>
      </section>

  )
}

export default Registration
