const path = require('path')
const electron = require('electron')

const extName = 'Vue.js devtools'
const extPath = path.join(__dirname, '..', 'vender')

exports.install = () => {
  if (process.type === 'renderer' || process.type === 'browser') {
    console.log(`Installing ${extName} from ${extPath}`)

    if (electron.session.defaultSession.getAllExtensions) {
      if (electron.session.defaultSession.getAllExtensions()[extName]) return true
      return electron.session.defaultSession.loadExtension(extPath)
    }

    if (process.type === 'renderer') {
      if (electron.remote.BrowserWindow.getDevToolsExtensions &&
            electron.remote.BrowserWindow.getDevToolsExtensions()[extName]) return true
      return electron.remote.BrowserWindow.addDevToolsExtension(extPath)
    }

    if (process.type === 'browser') {
      if (electron.BrowserWindow.getDevToolsExtensions &&
        electron.BrowserWindow.getDevToolsExtensions()[extName]) return true
      return electron.BrowserWindow.addDevToolsExtension(extPath)
    }
  } else {
    throw new Error(`${extName} can only be installed from an Electron process.`)
  }
}

exports.uninstall = () => {
  if (process.type === 'renderer' || process.type === 'browser') {
    console.log(`Uninstalling ${extName} from ${extPath}`)
    if (electron.session.defaultSession.removeExtension) {
      return electron.session.defaultSession.removeExtension(extName)
    }

    if (process.type === 'renderer') {
      return electron.remote.BrowserWindow.removeDevToolsExtension(extName)
    }

    if (process.type === 'browser') {
      return electron.BrowserWindow.removeDevToolsExtension(extName)
    }
  } else {
    throw new Error(`${extName} can only be uninstalled from an Electron process.`)
  }
}

exports.path = extPath
