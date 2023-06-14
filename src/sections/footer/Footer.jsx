import React from 'react';
import './Footer.css'
import {links, socials} from './data'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <ul className='nav__menu'>
                    {
                        links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
                    }
                </ul>
                <div className="footer__socials">
                    {
                        socials.map(social => <a key={social.id} href={social.link} target='__blank' rel='noopener noreferrer'>{social.icon}</a>)
                    }
                </div>
            </div>
            <div className="footer__copyright">
                <small>Copyright &copy; Stevie Lopez 2023</small>
            </div>
        </footer>
    )
}

export default Footer
