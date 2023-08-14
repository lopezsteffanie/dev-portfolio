import { useEffect } from 'react'
import HeaderImage from '../../assets/header.png'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.css'
import CV from '../../assets/Steffanie_Lopez_Resume_2023.pdf'
import {GrDocumentDownload} from 'react-icons/gr'
const Header = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile" data-aos='fade-in'>
                    <img src={HeaderImage} alt="Header Portrait" />
                </div>
                <h3 data-aos='fade-up'>Stevie Lopez</h3>
                <p data-aos='fade-up'>
                With a strong background as a teacher specializing in mathematics, I transitioned into software engineering with a focus on back-end development. Leveraging my experience in education, I bring a unique perspective to my team, enabling me to tackle problems and design solutions that optimize user experiences, streamline processes, and enhance accessibility to all users.
                </p>
                <div className="header__cta" data-aos='fade-up'>
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header__cv">
                    <a href={CV} download className='btn primary'>Download CV<GrDocumentDownload /></a>
                </div>
                <div className="header__socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
