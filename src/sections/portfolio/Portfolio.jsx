import React from 'react';
import './Portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    const categories = data.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];
    
    const filterProjectsHandler = (category) => {
        if(category === "all") {
        setProjects(data);
        return;
        }

        const filterProjects = data.filter(project => project.category === category);
        setProjects(filterProjects);
    }
    

    return (
        <section id="portfolio">
        <h2>Recent Projects</h2>
        <p>
        As a dedicated full stack developer, I take pride in crafting innovative web solutions that seamlessly integrate front-end and back-end technologies. Within this portfolio, you will discover a carefully curated selection of my most recent projects, each representing the intersection of creativity, functionality, and technical expertise. From responsive designs to scalable architectures, these projects demonstrate my commitment to delivering exceptional digital experiences.
        </p>
        <div className="container portfolio__container">
            <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
            <Projects projects={projects}/>
        </div>
        </section>
    )
}

export default Portfolio