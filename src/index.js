// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import { Provider, } from 'react-redux';
import store from './store';

import App from './containers/App';
import LanguageProvider from './containers/LanguageProvider';

const Root = () => (
    <Provider store={store}>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </Provider>
);

export default Root;
