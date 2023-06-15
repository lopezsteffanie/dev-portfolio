import React, { useEffect } from 'react';
import data from './data'
import Journey from './Journey';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Journeys.css'

const Journeys = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <section id="journeys">
            <h2>My Journey to Tech</h2>
            <p>
                Want to know how I got into tech? Click the toggles to learn more!
            </p>
            <div className="container journeys__container" data-aos='fade-in'>
                {
                    data.map(journey => (
                        <Journey key={journey.id} journey={journey}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Journeys
