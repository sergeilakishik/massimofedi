import * as types from './constants';

export function changeLanguage(locale) {
    return {
        type: types.CHANGE_LANGUAGE,
        locale,
    };
}
