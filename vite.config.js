import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/ProjecteTeamFlick/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'loginForm.html'),
                signup: resolve(__dirname, 'registerForm.html'),
                cookies: resolve(__dirname, 'Politica_cookies.html'),
                privacitat: resolve(__dirname, 'Politica_privacitat.html'),
            },
        },
    },
})
