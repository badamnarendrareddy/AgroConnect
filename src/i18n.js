import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationTE from './locales/te/translation.json';
import translationTA from './locales/ta/translation.json';
import translationKN from './locales/kn/translation.json';

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  te: { translation: translationTE },
  ta: { translation: translationTA },
  kn: { translation: translationKN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;