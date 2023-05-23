import React, {Component} from 'react';
import logo from '../images/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <>
            <nav className="navbar">
                <div className="navbar__inner-width">
                    <a href="/" className="navbar__logo"></a>
                    <div className="navbar__menu">
                        <a href="#">ГЛАВНАЯ</a>
                        <a href="#">УСЛУГИ</a>
                        <a href="#">БИЗНЕС</a>
                        <a href="#">О НАС</a>
                    </div>
                    <div className="navbar__buttons">
                        <button>ВОЙТИ</button>
                        <button>РЕГИСТРАЦИЯ</button>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}