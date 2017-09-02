import { combineReducers, } from 'redux';

import languageReducer from './containers/LanguageProvider/reducer';
import appReducer from './containers/App/reducer';

export default combineReducers({
    language: languageReducer,
    app: appReducer,
});
