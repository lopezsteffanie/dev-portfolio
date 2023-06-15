import React from 'react';
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Faqs from './sections/faqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Modal from './components/Modal';
import Theme from './theme/Theme';
import { useThemeContext } from './context/Theme-Context';

const App = () => {
    const {themeState} = useThemeContext();
    
    return (
        <main className={`${themeState.primary} ${themeState.background}`}>
            <NavBar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Faqs />
            <Contact />
            <Footer />
            <Modal />
            <Theme />
            {/* <FloatingNav /> */}
        </main>
    )
}

export default App
