const electron = require('electron')

exports.install = () => {
  if (process.type === 'renderer') {
    console.log(`Installing Vue.js devtools from ${__dirname}`)
    if (electron.remote.BrowserWindow.getDevToolsExtensions &&
        electron.remote.BrowserWindow.getDevToolsExtensions().devtron) return true
    return electron.remote.BrowserWindow.addDevToolsExtension(__dirname)
  } else if (process.type === 'browser') {
    console.log(`Installing Vue.js devtools from ${__dirname}`)
    if (electron.BrowserWindow.getDevToolsExtensions &&
        electron.BrowserWindow.getDevToolsExtensions().devtron) return true
    return electron.BrowserWindow.addDevToolsExtension(__dirname)
  } else {
    throw new Error('Vue.js devtools can only be installed from an Electron process.')
  }
}

exports.uninstall = () => {
  if (process.type === 'renderer') {
    console.log(`Uninstalling Vue.js devtools from ${__dirname}`)
    return electron.remote.BrowserWindow.removeDevToolsExtension('Vue.js devtools')
  } else if (process.type === 'browser') {
    console.log(`Uninstalling Vue.js devtools from ${__dirname}`)
    return electron.BrowserWindow.removeDevToolsExtension('Vue.js devtools')
  } else {
    throw new Error('Vue.js devtools can only be uninstalled from an Electron process.')
  }
}

exports.path = __dirname
