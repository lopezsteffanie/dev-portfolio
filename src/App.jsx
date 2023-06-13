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

const App = () => {
    return (
        <main>
            <NavBar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Faqs />
            <Contact />
            <Footer />
            <FloatingNav />
        </main>
    )
}

export default App
