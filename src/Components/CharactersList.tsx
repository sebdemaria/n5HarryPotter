import { useTranslation } from "react-i18next";

export default function CharactersList() {
    const { t } = useTranslation();

    return <div>{t("title")}</div>;
}
