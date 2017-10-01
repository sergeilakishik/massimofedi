// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import { Provider, } from 'react-redux';

import store from './store';

import App from './screens/App';
import LanguageProvider from './services/LanguageProvider';


const Root = () => (
    <Provider store={store}>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </Provider>
);

export default Root;
