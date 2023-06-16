import React, { useState, useEffect } from "react";
import { useThemeContext } from '../context/Theme-Context'
import './Toggle.css'

export default function Toggle({ className, toggled, onClick, toggleClassName }) {
    const {themeHandler} = useThemeContext();

    return  (
        <button className={className} onClick={() => {
            themeHandler(className);}}>
            <div className={toggleClassName} onClick={() => {
                onClick();
                // themeHandler(toggleClassName);
                console.log(localStorage);
            }}>
                <div className="notch">
                    <div className="crater"></div>
                    <div className="crater"></div>
                </div>
                <div>
                    <div className="shape sm" />
                    <div className="shape sm" />
                    <div className="shape md" />
                    <div className="shape lg" />
                </div>
            </div>
        </button>
    );
}