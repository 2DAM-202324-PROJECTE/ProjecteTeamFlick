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
                continguts: resolve(__dirname, 'biblioteca_continguts.html'),
                multiplataforma: resolve(__dirname, 'compatibilitat_multiplaforma.html'),
                interaccio: resolve(__dirname, 'interaccio_temps.html'),
                interficie: resolve(__dirname, 'interficie_friendly.html'),
            },
        },
    },
})

