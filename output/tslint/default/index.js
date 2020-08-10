module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // "array-type": [
    //   2,
    //   "array-simple",
    // ],
    "arrow-parens": 2,
    // "deprecation": 1,
    // "import-blacklist": [
    //   2,
    //   "rxjs/Rx"
    // ],
    "interface-name": 0,
    "max-classes-per-file": 0,
    // "max-line-length": [
    //   2,
    //   {
    //     "limit": 140,
    //     // class [a-zA-Z]+ implements pattern will ignore all class declarations implementing interfaces.
    //     // // pattern will ignore all in-line comments.
    //     "ignore-pattern": "class [a-zA-Z]+ implements |// "
    //   }
    // ],
    // "member-access": [
    //   2,
    //   "check-accessor",
    // ],
    // "member-ordering": [
    //   2, {
    //     "order": [
    //       // Static fields
    //       "public-static-field",
    //       "protected-static-field",
    //       "private-static-field",

    //       // Instance fields
    //       "public-instance-field",
    //       "protected-instance-field",
    //       "private-instance-field",

    //       // Constructor
    //       "public-constructor",
    //       "protected-constructor",
    //       "private-constructor",

    //       // Instance methods
    //       "public-instance-method",
    //       "protected-instance-method",
    //       "private-instance-method",

    //       // Static methods
    //       "public-static-method",
    //       "protected-static-method",
    //       "private-static-method",
    //     ],
    //   },
    // ],
    // "no-consecutive-blank-lines": 2,
    // "no-empty": [
    //   2,
    //   {
    //     "allowEmptyCatch": true,
    //   }
    // ],
    // "no-inferrable-types": [
    //   2,
    //   "ignore-params"
    // ],
    // "no-non-null-assertion": 2,
    // "no-redundant-jsdoc": 2,
    // "no-switch-case-fall-through": 2,
    // "no-use-before-declare": 2,
    "no-var-requires": 0,
    // "object-literal-key-quotes": [
    //   2,
    //   "as-needed"
    // ],
    "object-literal-sort-keys": 0,
    "ordered-imports": 0,
    // "quotemark": [
    //   2,
    //   "single"
    // ],
    // "trailing-comma": [
    //   2,
    //   {
    //     "multiline": {
    //       "objects": "always",
    //       "arrays": "always",
    //       "functions": "ignore",
    //       "typeLiterals": "ignore"
    //     },
    //     "esSpecCompliant": 2
    //   }
    // ],
    "no-debugger": 2,
    "prefer-const": [
      2,
      {
        "destructuring": "all"
      }
    ],
    // "no-unused-expression": 2
  },
};
