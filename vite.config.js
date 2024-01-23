import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/ProjecteTeamFlick/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'loginForm.html'),
                signup: resolve(__dirname, 'register.html'),
                cookies: resolve(__dirname, 'PoliticaCookies.html'),
                privacitat: resolve(__dirname, 'PoliticaPrivacitat.html'),
            },
        },
    },
})
