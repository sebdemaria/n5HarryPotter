import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        include: ["src/tests/**/*.{test,spec}.{ts,tsx}"],
        setupFiles: "./vitest.setup.ts",
        css: true,
        coverage: {
            provider: "v8",
            exclude: [
                "src/App.tsx",
                "src/main.tsx",
                "src/theme.ts",
                "src/i18n.ts",
                "src/consts/**",
                "src/tests/**",
                "src/types/**",
                "src/components/ui/Spinner.tsx",
                "vitest.config.*",
                "vite.config.*",
                "jest.config.*",
                "tailwind.config.*",
                "postcss.config.*",
                "tsconfig.*",
                "*.config.*",
                "**/config/**",
                "**/*.d.ts",
                "dist/assets/**",
                "dist/assets/__federation_*.js",
                "dist/assets/index-*.js",
                "dist/assets/remoteEntry.js",
                "dist/assets/_commonjsHelpers-*.js"
            ]
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
