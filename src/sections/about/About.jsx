import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {GrDocumentDownload} from 'react-icons/gr'
import data from './data'
import Card from '../../components/Card'
import './About.css'

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
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem fugiat eligendi sit quaerat dolore, aspernatur numquam perferendis delectus libero unde tempora ullam? Numquam debitis, cupiditate aliquam optio ipsa laborum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam consequuntur, reprehenderit pariatur eius corrupti quae illo, dolorem, fuga consectetur deleniti! Voluptate neque quis dolorem unde expedita. Fugit, laborum harum!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <GrDocumentDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About
