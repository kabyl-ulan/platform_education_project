import React from 'react'
import book from '../../image/Book.png'
import bookglobal from '../../image/book-global.png'
import Book from '../../image/booktr.png'
import { NavLink } from 'react-router-dom'
import bookTwo from '../../image/book-two.png'
import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
<<<<<<< HEAD
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero--general">
            <div className="hero--general__left">
              <h1>Само развитие лучше чем школьное обучение</h1>
              <p>Здесь вы найдете все для само-обучения.</p>
              <button>Подобрать пакет</button>
            </div>
            <img src={book} alt="" />
          </div>
        </div>
      </section>

      <section id="tabs">
        <div className="container">
          <div className="tabs--general">
            <div className="tabs--general__btn">
              <div>
                <button>Все разделы</button>
              </div>
              <div>
                <button>Новое</button>
              </div>
              <div>
                <button>Софт-скилс</button>
              </div>
              <div>
                <button>Книги</button>
              </div>
              <div>
                <button>Окружение</button>
              </div>
            </div>

            <div className="tabs--general__block" id="block1">
              <div className="tabs--general__block--one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <hr />
                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
              <div className="tabs--general__block--one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
              <div className="tabs--general__block--one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
              <div className="tabs--general__block--one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>

              <div className="tabs--general__block--two">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--two__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />
                <img src={bookTwo} alt="" />

                <div className="tabs--general__block--two__line"></div>

                <div className="tabs--general__block--two__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>

              <div className="tabs--general__block--one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
              <div className="tabs--general__block--one box-one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
              <div className="tabs--general__block--one box-one">
                <h1>С какой книги начать?</h1>

                <div className="tabs--general__block--one__btn">
                  <h2>Полезные статьи</h2>

                  <div>
                    <button>Все</button>
                    <button>Новое</button>
                    <button>Книги</button>
                  </div>
                </div>

                <img src={bookglobal} alt="" />

                <div className="tabs--general__block--one__line"></div>

                <div className="tabs--general__block--one__text">
                  <h4>Автор: Muslim Bolot</h4>
                  <h4>Дата: 22.08.22</h4>
                </div>
              </div>
            </div>

            <div className="tabs--general__footer">
              <button>Показать болшье</button>
            </div>
          </div>
        </div>
      </section>

      <section id="block">
        <div className="container">
          <div className="block--general">
            <div className="block--general__one">
              <div className="block--general__one--left">
                <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                <h2>
                  И получи доступ ко всем нашим материалам и начинай развиватся
                  сейчас вместе со всеми
                </h2>
              </div>

              <div className="block--general__one--right">
                <div className="block--general__one--right__btn">
                  <div className="block--general__one--right">
                    <div className="block--general__one--right__btn">
                      <NavLink to="/ourcourse">
                        <button>Подписаться</button>
                      </NavLink>
                    </div>

                    <div className="block--general__one--right__btnt">
                      <NavLink to="/toLearnMore">
                        <button>Узнать больше</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block--general__one--right__btnt"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="faq--general">
            <h1>FAQ?</h1>
            <div className="faq--general__block">
              <img src={Book} alt="img" />
              <div className="faq--general__block--right">
                <ul id="accordion">
                  <li>
                    <label htmlFor="first">
                      Сколько всего насчитывается материала всего?{' '}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </label>
                    <input type="radio" name="accordion" id="first" />

                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur doloremque harum maiores obcaecati
                        quaerat, sed tempore? Molestias quas quos temporibus.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="second">
                      Потеряю ли я оставшесея время если перейду на другой до
                      окончания этого?{' '}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </label>
                    <input type="radio" name="accordion" id="second" />

                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur doloremque harum maiores obcaecati
                        quaerat, sed tempore? Molestias quas quos temporibus.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="third">
                      Могу ли я отказаться от автопродления подписки?{' '}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </label>
                    <input type="radio" name="accordion" id="third" checked />

                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur doloremque harum maiores obcaecati
                        quaerat, sed tempore? Molestias quas quos temporibus.
                      </p>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="third">
                      Откуда мне узнавать про новые статьи и курсы?{' '}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </label>
                    <input type="radio" name="accordion" id="third" />

                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur doloremque harum maiores obcaecati
                        quaerat, sed tempore? Molestias quas quos temporibus.
                      </p>
                    </div>
                  </li>
                </ul>

                {/*<details>*/}
                {/*    <summary>Сколько всего насчитывается материала всего? <span><IoIosArrowDown/></span></summary>*/}
                {/*    <p>Сколько всего насчитывается материала всего?Сколько всего насчитывается материала всего?</p>*/}

                {/*</details>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
=======
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="hero--general">
                        <div className="hero--general__left">
                            <h1>Само развитие лучше чем школьное обучение</h1>
                            <p>Здесь вы найдете все для само-обучения.</p>
                            <button>Подобрать пакет</button>
                        </div>
                        <img src={book} alt=""/>
                    </div>
                </div>
            </section>

            <section id="tabs">
                <div className="container">
                    <div className="tabs--general">
                        <div className="tabs--general__btn">
                            <div>
                                <button>Все разделы</button>
                            </div>
                            <div>
                                <button>Новое</button>
                            </div>
                            <div>
                                <button>Софт-скилс</button>
                            </div>
                            <div>
                                <button>Книги</button>
                            </div>
                            <div>
                                <button>Окружение</button>
                            </div>


                        </div>

                        <div className="tabs--general__block" id="block1">
                            <div className="tabs--general__block--one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line"></div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>
                            <div className="tabs--general__block--one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>
                            <div className="tabs--general__block--one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>
                            <div className="tabs--general__block--one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>

                            <div className="tabs--general__block--two">

                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--two__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>
                                <img src={bookTwo} alt=""/>

                                <div className="tabs--general__block--two__line">

                                </div>

                                <div className="tabs--general__block--two__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>

                            </div>

                            <div className="tabs--general__block--one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>
                            <div className="tabs--general__block--one box-one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>
                            <div className="tabs--general__block--one box-one">
                                <h1>С какой книги начать?</h1>

                                <div className="tabs--general__block--one__btn">
                                    <h2>Полезные статьи</h2>

                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>

                                <img src={bookglobal} alt=""/>

                                <div className="tabs--general__block--one__line">

                                </div>

                                <div className="tabs--general__block--one__text">
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                </div>
                            </div>

                        </div>

                        <div className="tabs--general__footer">
                            <button>Показать болшье</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="block">
                <div className="container">
                    <div className="block--general">

                        <div className="block--general__one">
                            <div className="block--general__one--left">
                                <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                                <h2>
                                    И получи доступ ко всем нашим материалам и начинай развиватся
                                    сейчас вместе со всеми
                                </h2>
                            </div>

                            <div className="block--general__one--right">
                                <div className="block--general__one--right__btn">

                                    <div className="block--general__one--right">
                                        <div className="block--general__one--right__btn">
                                            <NavLink to="/registration">
                                                <button>Подписаться</button>
                                            </NavLink>
                                        </div>

                                        <div className="block--general__one--right__btnt">
                                            <NavLink to="/our-courses">
                                                <button>Узнать больше</button>
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="block--general__one--right__btnt">
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="faq">
                <div className="container">
                    <div className="faq--general">
                        <h1>FAQ?</h1>
                        <div className="faq--general__block">
                            <img src={Book} alt="img"/>
                            <div className="faq--general__block--right">
                                <ul id="accordion">
                                    <li>
                                        <label htmlFor="first">Сколько всего насчитывается материала
                                            всего? <span><IoIosArrowForward/></span></label>
                                        <input type="radio" name="accordion" id="first"/>

                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                                                doloremque harum maiores obcaecati quaerat, sed tempore? Molestias quas
                                                quos
                                                temporibus.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <label htmlFor="second">Потеряю ли я оставшесея время если перейду на другой до
                                            окончания этого? <span><IoIosArrowForward/></span></label>
                                        <input type="radio" name="accordion" id="second"/>

                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                                                doloremque
                                                harum maiores obcaecati quaerat, sed tempore? Molestias quas quos
                                                temporibus.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <label htmlFor="third">Могу ли я отказаться от автопродления
                                            подписки? <span><IoIosArrowForward/></span></label>
                                        <input type="radio" name="accordion" id="third" checked/>

                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                                                doloremque
                                                harum maiores obcaecati quaerat, sed tempore? Molestias quas quos
                                                temporibus.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <label htmlFor="third">Откуда мне узнавать про новые статьи и
                                            курсы? <span><IoIosArrowForward/></span></label>
                                        <input type="radio" name="accordion" id="third" checked/>

                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                                                doloremque
                                                harum maiores obcaecati quaerat, sed tempore? Molestias quas quos
                                                temporibus.</p>
                                        </div>
                                    </li>

                                </ul>


                                {/*<details>*/}
                                {/*    <summary>Сколько всего насчитывается материала всего? <span><IoIosArrowDown/></span></summary>*/}
                                {/*    <p>Сколько всего насчитывается материала всего?Сколько всего насчитывается материала всего?</p>*/}

                                {/*</details>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
>>>>>>> d0fe3991ee271e256f6605af4400bc8a1a439e1a
}

export default Home
