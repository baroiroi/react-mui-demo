import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, FormControlLabel, Switch, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export const MuiTesting = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <main>This app is using {isDarkMode ? 'dark' : 'light'} mode</main>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
          label="Dark Mode"
        />
      </Box>
    </ThemeProvider>
  )
}

