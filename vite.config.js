import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            // The `ViteImageOptimizer` plugin uses `sharp` under the hood.
            // You can pass specific options for each image type.
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
            tiff: {
                quality: 80,
            },
            // This is the core resizing option.
            // It uses `sharp`'s resize API.
            // The `fit` option ensures the image maintains its aspect ratio.
            // `width` will resize the image to a max width of 1000px.
            resize: {
                width: 1200,
                withoutEnlargement: true, // Prevents enlarging smaller images
                fit: 'inside', // Resizes to fit within the specified dimensions
            },
            // The `publicDir` option allows you to process images in your public folder.
            includePublic: true,
        }),
    ],
})
