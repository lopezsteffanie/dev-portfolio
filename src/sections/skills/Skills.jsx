import Card from '../../components/Card'
import './Skills.css'
import data from './data'
import Marquee from 'react-fast-marquee'

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <p>In the ever-evolving landscape of web development, staying ahead requires a diverse and up-to-date skill set. My portfolio showcases a comprehensive array of skills and technologies that I have acquired and mastered throughout my journey as a web developer. From front-end to back-end, databases to deployment, I bring a wealth of expertise to the table.</p>
            <div className="container skills__container" data-aos='fade-up'>
                {
                    data.map(item => (
                        <Card key={item.id} className="service light">
                            <div className="service__icon__container">
                                <div className="service__icon">{item.icon}</div>
                            </div>
                            <div className="service__details">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
