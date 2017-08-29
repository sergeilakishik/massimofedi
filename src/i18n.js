/*
* Repo: https://github.com/fnando/i18n-js
*/
import i18n from 'react-native-i18n';

import en from './locales/en.json';
import it from './locales/it.json';

i18n.fallbacks = true;

i18n.translations = {
    en,
    it,
};

i18n.defaultLocale = 'en';

export default i18n;
