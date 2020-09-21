const {app, BrowserWindow} = require("electron");
const game = require("./game_files/game");

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
    win.loadFile("index.html");
    game.start();
}

app.whenReady().then(createWindow);