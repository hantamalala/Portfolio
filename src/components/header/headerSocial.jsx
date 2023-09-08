import React from 'react';
// import { ReactDOM } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

function HeaderSocial() {

    return (
        <div className='header_socials'>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="http://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="http://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
        </div>
    )
}
export default HeaderSocial;