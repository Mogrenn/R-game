const {app, BrowserWindow} = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width:800,
        height: 600,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //win.removeMenu();
    win.loadFile("index.html")
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
