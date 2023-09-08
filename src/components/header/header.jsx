import React from 'react';
// import { ReactDOM } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './headerSocial';
import Me from '../../assets/images/me.jpg';
function Header() {

    return (
        <header>
            <div className='container header_container'>
                <h5>Bonjour je suis</h5>
                <h1>Hantamalala</h1>
                <h5 className='text-light'>Développeur web</h5>
                <CTA/>
                <HeaderSocial/>
                <div className="me">
                    <img src={Me} alt="me"  />
                </div>
                <a href="#contact" className='scroll_down'>Défiler vers le bas</a>
            </div>
        </header>
        

    )
}
export default Header;