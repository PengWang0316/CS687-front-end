import React from 'react';
import ReactDOM from 'react-dom';
// import I18n from '@kevinwang0316/i18n';

import App from './components/App';
import './styles/index.global.css';
import { DEFAULT_LANGUAGE } from './config';
import dict from './Dict';

// Fallback to english if dict does not have the user's language
// I18n.setDefaultLanguage(DEFAULT_LANGUAGE);
// I18n.setDictionary(dict);

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('app'),
  );
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));
