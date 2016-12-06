const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 1000,
        height: 660,
        resizable: false,
        titleBarStyle: 'hidden'
    })
    mainWindow.loadURL('file://' + __dirname + '/prod/index.html')
})
