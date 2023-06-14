import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './Header.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile">
                    <img src={HeaderImage} alt="Header Portrait" />
                </div>
                <h3>Stevie Lopez</h3>
                <p>
                With a strong background as a teacher specializing in mathematics, I transitioned into software engineering with a focus on back-end development. Leveraging my experience in education, I bring a unique perspective to my team, enabling me to tackle problems and design solutions that optimize learning experiences, streamline processes, and enhance accessibility to all users.
                </p>
                <div className="header__cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
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
