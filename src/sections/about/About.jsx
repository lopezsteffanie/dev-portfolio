import AboutImage from '../../assets/about.png'
import CV from '../../assets/cv.pdf'
import {GrDocumentDownload} from 'react-icons/gr'
import data from './data'
import Card from '../../components/Card'
import './About.css'
import Journeys from '../journey/Journeys'

const About = () => {
    return (
        <section id="about" data-aos='fade-in'>
            <div className='container about__container'>
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Me" />
                    </div>
                </div>
                <div className="about__right">
                    <Journeys className='about-journeys'/>
                    <a href={CV} download className='btn primary'>Download CV <GrDocumentDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About
