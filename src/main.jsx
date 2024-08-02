import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' kullandığınızdan emin olun
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './index.css';
import {fuchsia} from "tailwindcss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <Component {...pageProps}/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
