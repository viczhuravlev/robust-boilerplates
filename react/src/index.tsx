import 'core-js/stable';
import 'regenerator-runtime';

import React from 'react';
import { render } from 'react-dom';

import './globalStyles';

import App from './App';

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
