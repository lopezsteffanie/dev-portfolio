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
        As a skilled full-stack developer, I create innovative solutions that blend front-end and back-end technologies. Explore my portfolio for a selection of recent projects showcasing my expertise in creative and functional digital experiences.
        </p>
        <div className="container portfolio__container">
            <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
            <Projects projects={projects}/>
        </div>
        </section>
    )
}

export default Portfolio