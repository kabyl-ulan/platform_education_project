import React from 'react'
import hai from "../../image/hai.png"
import devs from "../../image/devs.png"
import Slider from 'react-slick'

const OurCourse = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <section id="new">
                <div className="container">
                    <div className="new--general">
                        <div className="new--general__block">
                            <div className="new--general__block--text">
                                <h1>Наши курсы</h1>
                                <p>
                                    Получайте новые знания, навыки и возможности для эффективной
                                    жизни.
                                </p>
                                <div className="new--general__block--text__btn">
                                    <button className="new--general__block--text__btn--one">
                                        Подобрать пакет
                                    </button>
                                    <button className="new--general__block--text__btn--two">
                                        Войти
                                    </button>
                                </div>
                            </div>

                            <img src={hai} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="courses">
                <div className="container">
                    <div className="courses--general">
                        <h1>Курсы</h1>
                        <div className="courses--general__block">
                            <div className="courses--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="courses--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="courses--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="courses--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="courses--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="courses--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                        </div>

                        <div className="courses--general__btn">
                            <button>Смотреть все курсы</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="master">
                <div className="container">
                    <div className="master--general">
                        <h1>Мастер классы</h1>

                        <div className="master--general__block">
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>
                            <div className="master--general__block--one">
                                <h1>Создание команды</h1>
                                <div className="master--general__block--one__btn">
                                    <h3>Обучение</h3>
                                    <div>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={devs} alt=""/>
                                <h5>Подробнее...</h5>
                            </div>

                        </div>

                        <div className="master--general__btn">
                            <button>Смотреть все мастер классы</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="reviews">
                <div className="container">
                    <div className="reviews--general">
                        <h1>Отзывы</h1>

                        <div className="reviews--general__swiper">
                            <Slider {...settings}>

                                <div style={{background: 'red',}}>
                                    <div className="reviews--general__swiper--block">
                                        <p>
                                            Курсы Образовательной платформы Self developing school - один из самых
                                            мощных инструментов для прокачки личной эффективности для собственника.
                                        </p>
                                        <nav>
                                            <h1>
                                                Muslim Bolot
                                            </h1>
                                            <input type="text"/>
                                            <h1>
                                                Предпрениматель
                                            </h1>
                                        </nav>
                                    </div>
                                </div>
                                <div style={{background: 'red',}}>
                                    <div className="reviews--general__swiper--block">
                                        <p>
                                            Курсы Образовательной платформы Self developing school - один из самых
                                            мощных инструментов для прокачки личной эффективности для собственника.
                                        </p>
                                        <nav>
                                            <h1>
                                                Muslim Bolot
                                            </h1>
                                            <input type="text"/>
                                            <h1>
                                                Предпрениматель
                                            </h1>
                                        </nav>
                                    </div>
                                </div>
                                <div style={{background: 'red',}}>
                                    <div className="reviews--general__swiper--block">
                                        <p>
                                            Курсы Образовательной платформы Self developing school - один из самых
                                            мощных инструментов для прокачки личной эффективности для собственника.
                                        </p>
                                        <nav>
                                            <h1>
                                                Muslim Bolot
                                            </h1>
                                            <input type="text"/>
                                            <h1>
                                                Предпрениматель
                                            </h1>
                                        </nav>
                                    </div>
                                </div>

                            </Slider>
                        </div>

                        <div className="reviews--general__block">

                            <div className="reviews--general__block--left">
                                <h1>Оставить отзыв</h1>
                                <p>
                                    Если вам понравилась наша платфрома, вы можете оставить отзыв,
                                    а также увидеть остальные отзывы в нашем телеграм канале.
                                </p>
                            </div>

                            <div className="reviews--general__block--right">
                                <div className="reviews--general__block--right__one">
                                    <div>
                                        <h1>ФИО:</h1>
                                        <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                                    </div>
                                    <div>
                                        <h1>Кем вы работаете? :</h1>
                                        <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                                    </div>
                                    <div>
                                        <h1>Отзыв:</h1>
                                        <textarea placeholder="comment..." cols="59" rows="10"></textarea>
                                    </div>
                                </div>
                                <p>
                                    Оставить отзыв могут только участники школы. Чтобы оставить отзыв с <br/> начало
                                    зарегестрируйтесь
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurCourse
