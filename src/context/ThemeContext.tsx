

// import { createContext, useState } from "react";

// export const ThemeContext = createContext({
//     isDarkTheme: false,
//     toggleTheme: () => {}
// })

// const ThemeProvider: React.FC = ({ children }) => {
//     const [isDarkTheme, setIsDarkTheme] = useState(false);

//     const toggleTheme = (): void => {
//         setIsDarkTheme(!isDarkTheme);
//     }

//     return (
//         <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
//             { children }
//         </ThemeContext.Provider>
//     )
// }