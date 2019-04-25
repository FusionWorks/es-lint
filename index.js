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
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0
    // add your custom rules below
  }
};