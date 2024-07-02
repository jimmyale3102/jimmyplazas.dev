import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const ThemeContext = createContext();

export const onLightIconColor = '#0288d1';
export const onDarkIconColor = '#fff';
export const LightHighlightColor = '#0d47a1';
export const DarkHighlightColor = '#FFD700';
export const BackgroundColorDark = '#121212';
export const BackgroundColorLight = '#fff';
export const BorderRadiusMedium = '8px';
export const BorderRadiusCard = '12px';

export const MarginDefault = '16px';
export const MarginSmall = '8px';
export const MarginBig = '32px';

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
