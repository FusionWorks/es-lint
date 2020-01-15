import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const shared = (path = '') => ({
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    copy({
      targets: [
        {
          src: './package.json',
          dest: `./dist/${path}`,
        },
        {
          src: './README.md',
          dest: `./dist/${path}`,
        },
        {
          src: './.eslintrc',
          dest: `./dist/${path}`,
        },
      ],
    }),
  ],
});

export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    ...shared(''),
  },
  {
    input: 'custom/react/index.js',
    output: [
      {
        file: 'dist/react/index.js',
        format: 'cjs',
      },
    ],
    ...shared('react'),
  },
  {
    input: 'custom/vue/index.js',
    output: [
      {
        file: 'dist/vue/index.js',
        format: 'cjs',
      },
    ],
    ...shared('vue'),
  },
];
