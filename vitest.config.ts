import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
    include: ['**/*.spec.ts'],
    exclude: ['document'],
    globals: true,
  },
});
