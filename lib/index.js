const path = require('path')
const electron = require('electron')

const extName = 'Vue.js devtools'
const extPath = path.join(__dirname, '..', 'vender')

exports.install = () => {
  if (process.type === 'renderer') {
    console.log(`Installing ${extName} from ${extPath}`)
    if (electron.remote.BrowserWindow.getDevToolsExtensions &&
        electron.remote.BrowserWindow.getDevToolsExtensions()[extName]) return true
    return electron.remote.BrowserWindow.addDevToolsExtension(extPath)
  } else if (process.type === 'browser') {
    console.log(`Installing ${extName} from ${extPath}`)
    if (electron.BrowserWindow.getDevToolsExtensions &&
        electron.BrowserWindow.getDevToolsExtensions()[extName]) return true
    return electron.BrowserWindow.addDevToolsExtension(extPath)
  } else {
    throw new Error(`${extName} can only be installed from an Electron process.`)
  }
}

exports.uninstall = () => {
  if (process.type === 'renderer') {
    console.log(`Uninstalling ${extName} from ${extPath}`)
    return electron.remote.BrowserWindow.removeDevToolsExtension(extName)
  } else if (process.type === 'browser') {
    console.log(`Uninstalling ${extName} from ${extPath}`)
    return electron.BrowserWindow.removeDevToolsExtension(extName)
  } else {
    throw new Error(`${extName} can only be uninstalled from an Electron process.`)
  }
}

exports.path = extPath
