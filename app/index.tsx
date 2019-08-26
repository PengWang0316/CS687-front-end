import React from 'react';
import ReactDOM from 'react-dom';
import I18n from './utils/I18n';

import App from './components/App';
import './styles/index.global.css';
import { DEFAULT_LANGUAGE } from './config';

// Use a IIEF to wrap a async call
(async () => {
  I18n.setDefaultLanguage(DEFAULT_LANGUAGE);
  await I18n.init();
  
  const render = (Component) => {
    ReactDOM.render(
      <Component />,
      document.getElementById('app'),
    );
  };
  render(App);
  
  // Webpack Hot Module Replacement API
  if (module.hot) module.hot.accept('./components/App', () => render(App));  
})();
