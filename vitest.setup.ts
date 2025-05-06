import "@testing-library/jest-dom";
import dotenv from "dotenv";
import { vi } from "vitest";

dotenv.config({ path: ".env" });

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            changeLanguage: () => Promise.resolve()
        }
    }),
    Trans: ({ children }: { children: React.ReactNode }) => children
}));
