module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    parserOptions: {
      'sourceType': 'module',
      'allowImportExportEverywhere': false,
      'codeFrame': true
    }
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-dynamic-require': false,
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'no-unused-vars': [
      'warn',
      {
        'args': 'none',
        'argsIgnorePattern': '^_.+$|utils'
      }
    ],
    'radix': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'error',
      {
        'allowForLoopAfterthoughts': true
      }
    ],
    'import/newline-after-import': 'off',
    'arrow-parens': 'off',
    'max-len': [
      'warn',
      {
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'tabWidth': 2,
        'code': 100
      }
    ],
    'eqeqeq': 'off',
    'consistent-return': 'off',
    'strict': 'off',
    'no-prototype-builtins': 'off',
    'operator-assignment': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': [
      'error',
      {
        'allow': [
          'constructors',
          'arrowFunctions'
        ]
      }
    ],
    'no-buffer-constructor': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-mixed-operators': 'off'
  }
};