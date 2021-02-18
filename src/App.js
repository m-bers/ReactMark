import React, { useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import { Switch, CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './theme'
import ResponsiveDrawer from './components/ResponsiveDrawer'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme(darkMode ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <ResponsiveDrawer>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
