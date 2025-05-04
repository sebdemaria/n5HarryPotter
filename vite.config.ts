import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
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
            shared: ["react", "react-dom"]
        })
    ],
    server: {
        port: 3002
    },
    preview: {
        port: 3002,
        strictPort: true,
        cors: true
    }
});
