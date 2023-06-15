import React from 'react';
import data from './data'
import ScrollSpy from 'react-scrollspy';
import Nav from './Nav'
import './FloatingNav.css'

const FloatingNav = () => {
    return (
        <ul id="floating__nav">
            <ScrollSpy offset={-500} className='scrollSpy' items={['header', 'about', 'skills', 'portfolio']} currentClassName='active'>
                {
                    data.map(item => <Nav key={item.id} item={item} />)
                }
            </ScrollSpy>
        </ul>
    )
}

export default FloatingNav
