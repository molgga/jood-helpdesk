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
        { file: `${entryName}.js`, format: 'cjs', sourcemap: true },
        { file: `${entryName}.mjs`, format: 'es', sourcemap: true },
      ],
    }),
    createBundle({
      plugins: [dts()],
      output: { file: `${entryName}.d.ts`, format: 'es' },
    }),
  ];
}

export function createSubmoduleBundle(moduleName, config) {
  return {
    ...config,
    input: `src/${moduleName}/index.ts`,
    external: (id) => !/^[./]/.test(id),
  };
}

export function createSubmodulePackaging() {
  const entryExports = require('./package.json').exports;
  const arr = [];
  let i = 0;
  for (let key in entryExports) {
    const value = entryExports[key];
    const entryModule = key.replace(/^\.\//, '');
    const entryName = value.require.default.replace(/\.js$/, '');
    if (i === 0) {
      arr.push(...createPackaging());
    }
    arr.push(
      createSubmoduleBundle(entryModule, {
        plugins: [esbuild()],
        output: [
          { file: `${entryName}.js`, format: 'cjs', sourcemap: true },
          { file: `${entryName}.mjs`, format: 'es', sourcemap: true },
        ],
      })
    );
    arr.push(
      createSubmoduleBundle(entryModule, {
        plugins: [dts()],
        output: {
          file: `${entryName}.d.ts`,
          format: 'es',
        },
      })
    );
    arr.push(
      createSubmoduleBundle(entryModule, {
        plugins: [dts()],
        output: {
          file: `${entryName}.d.mts`,
          format: 'es',
        },
      })
    );
    i++;
  }
  return arr;
}
