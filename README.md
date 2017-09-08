# vue-devtools

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> An electron devtools extension for debugging Vue.js applications.

## Installation

```sh
$ yarn add vue-devtools -D

# or npm
$ npm install vue-devtools --save-dev
```

## Usage

### Installing

calling `install` in your `main.js`

```js
const { app } = require('electron')
app.on('ready', () => {
  // ...
  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').install()
  }
  // ...
})
```

### Uninstalling

calling `uninstall` in your `main.js`

```js
const { app } = require('electron')
app.on('ready', () => {
  // ...
  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').uninstall()
  }
  // ...
})
```

## API

### install()

Install Vue.js devtools in Electron devtools.

### uninstall()

Uninstall Vue.js devtools in Electron devtools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](https://github.com/vuejs/vue-devtools/blob/master/LICENSE) &copy; [vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)

[MIT](LICENSE) &copy; [汪磊](https://zce.me/)



[travis-image]: https://img.shields.io/travis/zce/vue-devtools.svg
[travis-url]: https://travis-ci.org/zce/vue-devtools
[downloads-image]: https://img.shields.io/npm/dm/vue-devtools.svg
[downloads-url]: https://npmjs.org/package/vue-devtools
[version-image]: https://img.shields.io/npm/v/vue-devtools.svg
[version-url]: https://npmjs.org/package/vue-devtools
[license-image]: https://img.shields.io/npm/l/vue-devtools.svg
[license-url]: https://github.com/zce/vue-devtools/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/vue-devtools.svg
[dependency-url]: https://david-dm.org/zce/vue-devtools
[devdependency-image]: https://img.shields.io/david/dev/zce/vue-devtools.svg
[devdependency-url]: https://david-dm.org/zce/vue-devtools?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
