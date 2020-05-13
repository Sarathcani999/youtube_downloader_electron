const {app, BrowserWindow , Menu} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow;

app.on('ready' , function() {
    mainWindow = new BrowserWindow({width:600 , height:225 , resizable:false});
    mainWindow.setMenuBarVisibility(false)
    mainWindow.setTitle("Youtube Downloader")

    mainWindow.loadURL(url.format({
        pathname : path.join( __dirname ,'public' , 'home.html') ,
        protocol : 'file' ,
        slashes : true
    }))
})
