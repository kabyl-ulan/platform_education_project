import React from 'react';
// import {NavLink} from "react-router-dom";

const BurgerMenu = ({click, setClick}) => {
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className="burger-menu"
             style={{
                 transform: click ? 'translateY(0)': '',
             }}
        >
            <nav className='burger-menu__nav'>
                <a href={'#header'}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Главная</a>
                <a href={'#service'}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Услуги</a>
                <a href={"#our_project"}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Наши проекты</a>
                <a href={"#about"}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    О нас</a>
                <a href={"#tool"}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Инструменты</a>
                <a href={"#contacts"}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Контакты</a>

                <a href={"#"}
                   onClick={handleClick}
                   className={'burger-menu__nav__link'}>
                    Контакты</a>



            </nav>
        </div>
    );
};

export default BurgerMenu;