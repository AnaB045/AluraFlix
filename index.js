import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MovieProvider } from './contexts/MovieContext';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
