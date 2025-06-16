import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa";
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        workbox:{
          globPatterns: ['**/*.{js,css,html,png,svg,ico,json,webmanifest,txt,xml,eot,ttf,woff,woff2,otf}'],
        },
        includeAssets: ['자격지신.png'],
        manifest: {
          name: '자격지신',
          short_name: '자격지신',
          theme_color: '#ffffff',
          icons: [
            {
              src: '자격지신.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '자격지신.png',
              sizes: '192x192',
              type: 'image/png'
            }
          ]
        }
      }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})