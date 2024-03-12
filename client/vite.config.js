// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:4000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')

//       },
//     },
//   },
// })



export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
     "/api" :{
        target:"http://127.0.0.1:4000" ,
        changeOrigin: true,
        secure: false,
      },
      "/auth" :{
        target:"http://127.0.0.1:4000" ,
        changeOrigin: true,
        secure: false,
      }
    },
    port:5173,
  },
})