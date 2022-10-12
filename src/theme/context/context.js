import React, { createContext, useState } from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {

	const [className, setClassName] = useState('');	
    
    return (
        <ThemeContext.Provider value={{className, setClassName}}>
            {children}
        </ThemeContext.Provider>
    )
  }
