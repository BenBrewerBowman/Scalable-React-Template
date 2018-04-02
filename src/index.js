import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app/App';
import './index.css';


const Main = () => (
    // Beginning with v0.15.0, Material-UI components require a theme to be provided.
    // MuiThemeProvider injects the theme into your application context.
    <MuiThemeProvider>
      {/* Handles routing between different forms */}
      <BrowserRouter>
        {/* The main application renders here */}
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

registerServiceWorker();