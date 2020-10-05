module.exports = {
  extends: [
    '../index.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 4, {
      'SwitchCase': 1,
      'CallExpression': { 'arguments': 'first' },
      'FunctionExpression': { 'parameters': 'first' },
      'FunctionDeclaration': { 'parameters': 'first' }
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'singleline': {
          'delimiter': 'semi',
          'requireLast': true
        }
      }
    ]
  },
}