import AboutImage from '../../assets/about.png'
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
                </div>
            </div>
        </section>
    )
}

export default About
