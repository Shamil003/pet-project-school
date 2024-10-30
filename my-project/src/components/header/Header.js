import React from 'react';
import module from './Header.module.css'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className={module.menuText}>
                    <img src="/img/logo.svg" alt="logo"/>
                            {/*<Link className={module.link} to="#about">О нас</Link>*/}
                            {/*<Link className={module.link} to="/direction">Каталог</Link>*/}
                            {/*<Link className={module.link} to="/certificates">Сертификаты</Link>*/}
                            {/*<Link className={module.link} to="/reviews">Отзывы</Link>*/}
                            {/*<Link className={module.link} to="/contacts">Контакты</Link>*/}
                        <ul className={module.link}>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#direction">Каталог</a></li>
                            <li><a href="#certificates">Сертификаты</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                        <div className={module.callMenu}>
                            <img src="/img/call-menu.svg" alt=""/>
                            <p>+996550550550</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;