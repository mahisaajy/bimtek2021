import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, deepPurple, orange, pink, red, teal, yellow } from '@material-ui/core/colors';

// TODO: Kenapa typescript harus ada declare module ini
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    // primary: blue,
    primary: {
      main: '#1565c0',
    }
  },
  // typography: {
  //   fontFamily: [
  //     '"Google Sans"',
  //     'Arial',
  //     'Helvetica',
  //     'sans-serif',
  //     // '-apple-system',
  //     // 'BlinkMacSystemFont',
  //     // '"Segoe UI"',
  //     // 'Roboto',
  //     // '"Helvetica Neue"',
  //     // 'Arial',
  //     // 'sans-serif',
  //     // '"Apple Color Emoji"',
  //     // '"Segoe UI Emoji"',
  //     // '"Segoe UI Symbol"',
  //   ].join(','),
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
