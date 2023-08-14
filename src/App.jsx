import React from 'react';
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import Journeys from './sections/journey/Journeys';
import Skills from './sections/skills/Skills';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/Theme-Context';
import {useRef, useState, useEffect} from 'react';

const App = () => {
    const {themeState} = useThemeContext();

    const mainRef = useRef();
    const [showFloatingNav, setShowFloatingNav] = useState(true);
    const [siteYPosition, setSiteYPosition] = useState(0)

    const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
    }

    const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
    }

    // check if floating nav should be shown or hidden
    const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
        showFloatingNavHandler();
    } else {
        hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    }

    useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1500);

    // cleanup function
    return () => clearInterval(checkYPosition);
    }, [siteYPosition])

    

    return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <NavBar/>
        <Header/>
        <Journeys/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Theme/>
        {showFloatingNav && <FloatingNav/>}
    </main>
    )
}

export default App