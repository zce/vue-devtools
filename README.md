# vue-devtools

An electron devtools extension for debugging Vue.js applications.

[![NPM](https://nodei.co/npm/vue-devtools.png)](https://nodei.co/npm/vue-devtools/)

## Usage

### Installing
In an electron proj

```bash
$ npm i vue-devtools --save-dev
```

then, run install in your `main.js`

```javascript
const { app, BrowserWindow } = require('electron')
app.on('ready', () => {
  ....
  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').install()
  }
  ....
})
```

### Uninstalling

Running uniinstall in your `main.js`

```javascript
const { app, BrowserWindow } = require('electron')
app.on('ready', () => {
  ....
  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').uninstall()
  }
  ....
})
```



## An npm package base on https://github.com/vuejs/vue-devtools

## Latest updated @ Jul 19, 2016
