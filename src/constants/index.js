import {
  INTERCOM_APP_ID_PROD,
  INTERCOM_APP_ID_TEST,
} from './keys';

export const SCROLL_REVEAL_OPTIONS = {
  reset: false,
};

export const BROWSER_LANGUAGE = (navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage || '')).substring(0, 2);

export const USES_CONTENT = {
  1: ['directors', 'readers'],
  2: ['decentralizedDB', 'smartContract'],
  3: ['tipping', 'boostContent'],
  4: ['fansSupport', 'vote'],
};

export const LANGUAGE = {
  ENGLISH: 'en',
  JAPANESE: 'ja',
  CHINESE: 'zh',
};

export const LANGUAGES = [LANGUAGE.ENGLISH, LANGUAGE.CHINESE, LANGUAGE.JAPANESE];

export const INTERCOM_APP_ID = process.env.NODE_ENV === 'development' ? INTERCOM_APP_ID_TEST : INTERCOM_APP_ID_PROD;
