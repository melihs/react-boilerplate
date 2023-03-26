import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import tr from "../assets/locales/tr.json";
import en from "../assets/locales/en.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      tr: {
        translation: tr
      }
    },
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
