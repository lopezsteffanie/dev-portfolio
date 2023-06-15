import React from 'react'
import { useThemeContext } from '../context/Theme-Context'

const Color = ({className}) => {
    const {themeHandler} = useThemeContext();
    return (
        <button className={className} onClick={() => themeHandler(className)}></button>
    )
}

export default Color
