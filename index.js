const electron = require('electron')

const EXT_NAME = 'Vue.js devtools';

exports.install = () => {
  if (process.type === 'renderer') {
    console.log(`Installing ${EXT_NAME} from ${__dirname}`)
    if (electron.remote.BrowserWindow.getDevToolsExtensions &&
        electron.remote.BrowserWindow.getDevToolsExtensions()[EXT_NAME]) return true
    return electron.remote.BrowserWindow.addDevToolsExtension(__dirname)
  } else if (process.type === 'browser') {
    console.log(`Installing ${EXT_NAME} from ${__dirname}`)
    if (electron.BrowserWindow.getDevToolsExtensions &&
        electron.BrowserWindow.getDevToolsExtensions()[EXT_NAME]) return true
    return electron.BrowserWindow.addDevToolsExtension(__dirname)
  } else {
    throw new Error(`${EXT_NAME} can only be installed from an Electron process.`)
  }
}

exports.uninstall = () => {
  if (process.type === 'renderer') {
    console.log(`Uninstalling ${EXT_NAME} from ${__dirname}`)
    return electron.remote.BrowserWindow.removeDevToolsExtension(EXT_NAME)
  } else if (process.type === 'browser') {
    console.log(`Uninstalling ${EXT_NAME} from ${__dirname}`)
    return electron.BrowserWindow.removeDevToolsExtension(EXT_NAME)
  } else {
    throw new Error(`${EXT_NAME} can only be uninstalled from an Electron process.`)
  }
}

exports.path = __dirname
