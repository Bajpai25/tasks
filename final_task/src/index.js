import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import "./Row.css"
import "./App.css"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider  domain="dev-dnb6djogfzyd2xsp.us.auth0.com"
    clientId="0QHl8Bd8NmLZG0mSSgTmvzcE0Gfp6RwG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> <App /></Auth0Provider>
  </React.StrictMode>
);

