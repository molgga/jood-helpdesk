import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import del from 'rollup-plugin-delete';

export function createBundle(config) {
  return {
    ...config,
    input: 'src/index.ts',
    external: (id) => !/^[./]/.test(id),
  };
}

export function createPackaging() {
  const entryName = require('./package.json').main.replace(/\.js$/, '');
  return [
    createBundle({
      plugins: [esbuild(), del({ targets: 'dist/*' })],
      output: [
        {
          file: `${entryName}.js`,
          format: 'cjs',
          sourcemap: true,
        },
        {
          file: `${entryName}.mjs`,
          format: 'es',
          sourcemap: true,
        },
      ],
    }),
    createBundle({
      plugins: [dts()],
      output: {
        file: `${entryName}.d.ts`,
        format: 'es',
      },
    }),
  ];
}
