import { DEFAULT_LANGUAGE, CHANGE_LANGUAGE, } from './constants';

const languageInitialState = {
    locale: DEFAULT_LANGUAGE,
};

function languageReducer(state = languageInitialState, action) {
    switch (action.type) {
    case CHANGE_LANGUAGE:
        return {
            ...state,
            locale: action.locale,
        };
    default:
        return state;
    }
}

export default languageReducer;
