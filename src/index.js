import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rtl from 'jss-rtl';
import { create } from 'jss';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: "rtl"
});
ReactDOM.render(
  <React.StrictMode>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
