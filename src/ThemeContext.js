import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const ThemeContext = createContext();

const White = '#fff'
const Blue = '#0288d1';
const LightPrimary = Blue;

const DarkPrimary = '#121212';
const DarkSecondary = '#35A0DA';
const DarkTertiary = '#7DC2E7';
const OnDark = '#BDE0F3';

export const onLightIconColor = LightPrimary;
export const onDarkIconColor = DarkTertiary;
export const onLightTextColor = LightPrimary;
export const onDarkTextColor = DarkSecondary;
export const onLightBorderColor = onLightIconColor;
export const onDarkBorderColor = 'rgba(255, 255, 255, 0.3)';

export const LightHighlightColor = '#0d47a1';
export const DarkHighlightColor = OnDark;

export const BackgroundColorDark = DarkPrimary;
export const BackgroundColorLight = White;

export const BorderRadiusMedium = '8px';
export const BorderRadiusCard = '12px';

export const MarginToolBar = '88px';
export const MarginBig = '32px';
export const MarginDefault = '16px';
export const MarginSmall = '8px';
export const MarginXSmall = '4px';

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const primaryColor = mode === 'light' ? LightPrimary : DarkSecondary;

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Raleway',
        },
        palette: {
          primary: {
            main: primaryColor,
          },
          mode,
          background: {
            default: mode === 'light' ? '#fafafa' : "#141414",
          }
        },
      }),
    [mode, primaryColor]
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
