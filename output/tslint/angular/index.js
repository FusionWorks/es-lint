module.exports = {
  extends: [
    '../default/index.js',
  ],
  rules: {
    // New rules in here
    "no-output-on-prefix": 2,
    "use-input-property-decorator": 2,
    "use-output-property-decorator": 2,
    "use-host-property-decorator": 2,
    "no-input-rename": 2,
    "no-output-rename": 2,
    "use-life-cycle-interface": 2,
    "use-pipe-transform-interface": 2,
    "component-class-suffix": 2,
    "directive-class-suffix": 2,
    "array-type": [
      2,
      "array",
    ],
    "semicolon": [
      2,
      "always",
      "ignore-bound-class-methods",
      "ignore-interfaces",
    ],
    "no-empty": [
      0
    ],
    "whitespace": [
      2,
      "check-module"
    ],
    "trailing-comma": [
      2,
      {
        "multiline": "always",
        "singleline": "never",
        "esSpecCompliant": 2
      }
    ],
    "import-blacklist": [
      2,
      "rxjs",
      "ngx-bootstrap"
    ],
  },
};