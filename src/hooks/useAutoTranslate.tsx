import axios from "axios";
import { useTranslation } from "react-i18next";

type UseAutoTranslateResult = {
    translate: (text: string) => Promise<string>;
};

// ? could be improved by adding a cache strategy to the translated text

export function useAutoTranslate(): UseAutoTranslateResult {
    const { i18n } = useTranslation();

    const translate = async (text: string): Promise<string> => {
        if (!text || i18n.language === "en") return text;

        try {
            const res = await axios.post(
                // if lang is different than EN use libretranslate to translate rick morty api language
                // because the api just supports EN
                "https://libretranslate.de/translate",
                {
                    q: text,
                    source: "en",
                    target: i18n.language,
                    format: "text"
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            return res.data.translatedText;
        } catch (error) {
            console.error("Translation error:", error);
            return text;
        }
    };

    return { translate };
}
