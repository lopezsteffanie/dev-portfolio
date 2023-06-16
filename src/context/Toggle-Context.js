import { createContext, useContext, useReducer, useEffect } from "react";
import toggleReducer from './Toggle-Reducer';


export const ToggleContext = createContext();

// get toggleClassName settings from local storage, or use default toggleClassName
const initialToggleState = JSON.parse(localStorage.getItem('isToggled')) || {isToggled: 'toggle'}

export const ToggleProvider = ({children}) => {
    const [toggleState, dispatchToggle] = useReducer(toggleReducer, initialToggleState)

    const toggleHandler = (buttonClassName) => {
        dispatchToggle({type: buttonClassName})
    }

    // save toggle settings to local storage
    useEffect(() => {
        localStorage.setItem('isToggled', JSON.stringify(toggleState))
    }, [toggleState.isToggled])

    return <ToggleContext.Provider value={{toggleState, toggleHandler}}>{children}</ToggleContext.Provider>
}

// custom hook to use our toggle context wherever we want in our project
export const useToggleContext = () => {
    return useContext(ToggleContext);
}