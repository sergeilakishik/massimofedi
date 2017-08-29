import { getDeviceLocale, } from 'react-native-device-info';
import RNDeviceInfo from 'react-native';

import { DEFAULT_LANGUAGE, CHANGE_LANGUAGE, } from './constants';

const languageInitialState = {
    locale: RNDeviceInfo.NativeModules.RNDeviceInfo ? getDeviceLocale() : DEFAULT_LANGUAGE, // Need this thing for escape error in tests
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
