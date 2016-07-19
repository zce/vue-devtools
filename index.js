const electron = require('electron')

exports.install = () => {
  if (process.type === 'renderer') {
    console.log(`Installing Vue Devtools from ${__dirname}`)
    return electron.remote.BrowserWindow.addDevToolsExtension(__dirname)
  } else if (process.type === 'browser') {
    console.log(`Installing Vue Devtools from ${__dirname}`)
    return electron.BrowserWindow.addDevToolsExtension(__dirname)
  } else {
    throw new Error('Vue Devtools can only be installed from an Electron process.')
  }
}

exports.uninstall = () => {
  if (process.type === 'renderer') {
    console.log(`Uninstalling Vue Devtools from ${__dirname}`)
    return electron.remote.BrowserWindow.removeDevToolsExtension('devtron')
  } else if (process.type === 'browser') {
    console.log(`Uninstalling Vue Devtools from ${__dirname}`)
    return electron.BrowserWindow.removeDevToolsExtension('devtron')
  } else {
    throw new Error('Vue Devtools can only be uninstalled from an Electron process.')
  }
}

exports.path = __dirname
