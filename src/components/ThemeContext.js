import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../App.css';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState('dark');
  
  const primaryColor = '#0288d1';

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          mode,
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="theme-transition">{children}</div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
