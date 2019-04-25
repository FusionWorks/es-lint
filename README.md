# @FusionWorks/es-lint

[![GitHub package.json version](https://img.shields.io/github/package-json/v/FusionWorks/es-lint.svg?label=Version)](https://github.com/FusionWorks/es-lint) 
[![npm downloads](https://img.shields.io/npm/dm/@fusionworks/es-lint.svg)](https://npmjs.org/@fusionworks/es-lint)
  
**All tslint configurations for fusionworks company bundled in here.**

## Installation

```sh
npm install @fusionworks/es-lint --save-dev
```

## Usage

### Vue
In `tslint.json`:

```json
{
  "extends": "@fusionworks/es-lint/vue"
}
```
### React
In `tslint.json`:

```json
{
  "extends": "@fusionworks/es-lint/react"
}
```
### Vue
In `tslint.json`:

```json
{
  "extends": "@fusionworks/es-lint/vue"
}
```

### Just Javascript
In `tslint.json`:

```json
{
  "extends": "@fusionworks/es-lint"
}
```
### Example of use
```json
{
  "extends": "@fusionworks/es-lint/react",
  "linterOptions": {
    "exclude": [
      "e2e"
    ]
  },
  "rules": {}
}
```


### Rules

* **[airbnb](https://www.npmjs.com/package/tslint-config-airbnb)**
* _[tslint](https://www.npmjs.com/package/tslint)_
* _[tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)_
* _[tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)_
* _[tslint-microsoft-contrib](https://www.npmjs.com/package/tslint-microsoft-contrib)_

