import { combineReducers, } from 'redux';

import languageReducer from './services/LanguageProvider/reducer';
import appReducer from './screens/App/reducer';
import navReducer from './services/Navigation/reducer';

export default combineReducers({
    language: languageReducer,
    app: appReducer,
    nav: navReducer,
});
