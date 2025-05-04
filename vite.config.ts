import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "charactersHarry",
            filename: "remoteEntry.js",
            exposes: {
                "./CharactersList": "./src/CharactersList.tsx"
            },
            shared: ["react", "react-dom"]
        })
    ],
    server: {
        port: 3002
    }
});
