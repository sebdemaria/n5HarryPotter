import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "esnext",
        minify: false,
        cssCodeSplit: false
    },
    plugins: [
        react(),
        federation({
            name: "charactersHarry",
            filename: "remoteEntry.js",
            exposes: {
                "./CharactersList": "./src/App.tsx"
            },
            shared: {
                react: {
                    import: true,
                    version: "^18.2.0",
                    shareScope: "default"
                },
                "react-dom": {
                    import: true,
                    version: "^18.2.0",
                    shareScope: "default"
                },
                "styled-components": {
                    import: true,
                    requiredVersion: "6.1.17",
                    shareScope: "default"
                }
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        port: 3002
    },
    preview: {
        port: 3002,
        strictPort: true,
        cors: true
    }
});
