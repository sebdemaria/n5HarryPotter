import "./App.css";
import "./i18n";

import { I18nextProvider } from "react-i18next";
import CharactersList from "./components/CharactersList";
import i18n from "./i18n";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <CharactersList />
        </I18nextProvider>
    );
}

export default App;
