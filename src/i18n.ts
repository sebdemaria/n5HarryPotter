import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es }
    },
    lng: localStorage.getItem("app_lang") || "es",
    fallbackLng: "es",
    interpolation: {
        escapeValue: false
    }
    // debug: true
});

window.addEventListener("languageChanged", () => {
    const newLang = localStorage.getItem("app_lang");
    if (newLang) {
        i18n.changeLanguage(newLang);
    }
});

export default i18n;
