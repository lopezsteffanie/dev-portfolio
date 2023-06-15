import React, { useEffect } from 'react';
import data from './data'
import Faq from './Faq';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Faqs.css'

const FAQs = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <section id="faqs">
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some questions I usually get. Click to toggle the answer, and if you still have questions, shoot me a message from the contact section!
            </p>
            <div className="container faqs__container" data-aos='fade-in'>
                {
                    data.map(faq => (
                        <Faq key={faq.id} faq={faq}/>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQs
