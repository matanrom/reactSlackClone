import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () =>{
  return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
