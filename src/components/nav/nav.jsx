import React from 'react';
// import { ReactDOM } from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'



function Nav() {

    return (
        <div>
            <nav>
                <a href='home'><AiOutlineHome/></a>
                <a href='#about'><AiOutlineUser/></a>
                <a href='#experience'><BiBook/></a>
                <a href='#services'><RiServiceLine/></a>
                <a href='#contact'><BiMessageSquareDetail/></a>
            </nav>
        </div>
    )
}
export default Nav;