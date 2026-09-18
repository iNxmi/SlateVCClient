import {defineConfig} from 'vite'
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react'
import generouted from "@generouted/react-router/plugin"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        generouted(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
            "@themes": fileURLToPath(new URL("./src/themes", import.meta.url)),
        }
    },
    server: {
        open: true
    }
})
