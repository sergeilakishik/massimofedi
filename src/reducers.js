import { combineReducers, } from 'redux';

import languageReducer from './containers/LanguageProvider/reducers';

export default combineReducers({
    language: languageReducer,
});
