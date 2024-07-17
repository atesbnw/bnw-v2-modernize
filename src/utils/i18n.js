import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../utils/languages/en.json';
import turkish from '../utils/languages/tr.json';

import financialTransactionsEN from '../utils/languages/pages/user-management/en/financial-transactions.json';
import french from '../utils/languages/fr.json';
import arabic from '../utils/languages/ar.json';
import chinese from '../utils/languages/ch.json';

const resources = {
  en: {
    translation: {
      ...english,
      pages: {
        "user-management": {
          "financial-transactions": financialTransactionsEN
        }
      }
    },
  },
  tr: {
    translation: turkish,
  },
  // fr: {
  //   translation: french,
  // },
  // ar: {
  //   translation: arabic,
  // },
  // ch: {
  //   translation: chinese,
  // },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
