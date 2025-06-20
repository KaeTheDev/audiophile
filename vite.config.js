// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig({
//   base: '/',
//   build: {
//     rollupOptions: {
//       input: {
//         home: resolve(__dirname, 'index.html'),
//         headphones: resolve(__dirname, 'headphones.html'),
//         speakers: resolve(__dirname, 'speakers.html'),
//         earphones: resolve(__dirname, 'earphones.html'),
//         'product-earphones': resolve(__dirname, 'product-earphones.html'),
//         'product-xx59-headphones': resolve(__dirname, 'product-xx59-headphones.html'),
//         'product-xx99-mark-one-headphones': resolve(__dirname, 'product-xx99-mark-one-headphones.html'),
//         'product-xx99-mark-two-headphones': resolve(__dirname, 'product-xx99-mark-two-headphones.html'),
//         'product-zx7-speaker': resolve(__dirname, 'product-zx7-speaker.html'),
//         'product-zx9-speaker': resolve(__dirname, 'product-zx9-speaker.html'),
//         checkout: resolve(__dirname, 'checkout.html'),
//       },
//     },
//   },
// });

// NOTE: Make the product page names easier like home, headphones, speakers, etc

// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig(({ command, mode }) => {
//   // Use different base paths for development vs production
//   const base = command === 'serve' ? '/' : '/audiophile/';
  
//   return {
//     base: base,
//     build: {
//       rollupOptions: {
//         input: {
//           home: resolve(__dirname, 'index.html'),
//           headphones: resolve(__dirname, 'headphones.html'),
//           speakers: resolve(__dirname, 'speakers.html'),
//           earphones: resolve(__dirname, 'earphones.html'),
//           'product-earphones': resolve(__dirname, 'product-earphones.html'),
//           'product-xx59-headphones': resolve(__dirname, 'product-xx59-headphones.html'),
//           'product-xx99-mark-one-headphones': resolve(__dirname, 'product-xx99-mark-one-headphones.html'),
//           'product-xx99-mark-two-headphones': resolve(__dirname, 'product-xx99-mark-two-headphones.html'),
//           'product-zx7-speaker': resolve(__dirname, 'product-zx7-speaker.html'),
//           'product-zx9-speaker': resolve(__dirname, 'product-zx9-speaker.html'),
//           checkout: resolve(__dirname, 'checkout.html'),
//         },
//       },
//     },
//     plugins: [
//       {
//         name: 'html-transform',
//         transformIndexHtml(html, ctx) {
//           // Replace placeholder with actual base path
//           return html.replace(/\{\{BASE_URL\}\}/g, base);
//         }
//       }
//     ],
//   };
// });

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // Use different base paths for development vs production
  const base = command === 'serve' ? '/' : '/audiophile/';
  
  return {
    base: base,
    define: {
      __BASE_URL__: JSON.stringify(base)
    },
    build: {
      rollupOptions: {
        input: {
          home: resolve(__dirname, 'index.html'),
          headphones: resolve(__dirname, 'headphones.html'),
          speakers: resolve(__dirname, 'speakers.html'),
          earphones: resolve(__dirname, 'earphones.html'),
          'product-earphones': resolve(__dirname, 'product-earphones.html'),
          'product-xx59-headphones': resolve(__dirname, 'product-xx59-headphones.html'),
          'product-xx99-mark-one-headphones': resolve(__dirname, 'product-xx99-mark-one-headphones.html'),
          'product-xx99-mark-two-headphones': resolve(__dirname, 'product-xx99-mark-two-headphones.html'),
          'product-zx7-speaker': resolve(__dirname, 'product-zx7-speaker.html'),
          'product-zx9-speaker': resolve(__dirname, 'product-zx9-speaker.html'),
          checkout: resolve(__dirname, 'checkout.html'),
        },
      },
    },
  };
});