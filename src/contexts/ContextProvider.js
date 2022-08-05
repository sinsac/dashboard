import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider=({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setthemeSettings] = useState(false);

    const setMode = (e)=>{
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setthemeSettings(false);
    }

    const setColor = (color)=>{
        setcurrentColor(color);
        localStorage.setItem('colorMode',color);
        setthemeSettings(false);
    }


    const handleClick = (clicked)=>{
        setIsClicked({ ...initialState, [clicked]:true});
    }
    return (
        <StateContext.Provider value= {{
            activeMenu, 
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            themeSettings, 
            setthemeSettings,
            setMode,
            setColor,
            initialState,

            }} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext);