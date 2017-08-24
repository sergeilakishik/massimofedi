import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux'
import store from './store';

import App from './containers/App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
