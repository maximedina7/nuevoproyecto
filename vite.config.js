import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nuevoproyecto2/', // o '/' si estás en la raíz del dominio
  build: {
    outDir: 'docs',
  },
});

