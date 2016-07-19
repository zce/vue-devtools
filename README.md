# vue-devtools
An electron devtools extension for debugging Vue.js applications.

## Usage

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

## An npm package base on https://github.com/vuejs/vue-devtools
