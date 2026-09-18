const { app, BrowserWindow } = require("electron")
const path = require("path")
const {ipcMain} = require("electron")

ipcMain.on("window-minimize", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.minimize()
})

ipcMain.on("window-maximize", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window)
        return

    if(window.isMaximized()) {
        window.unmaximize()
    } else {
        window.maximize()
    }
})

ipcMain.on("window-close", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.close()
})

const isDev = !app.isPackaged

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,

        minWidth: 800,
        minHeight: 600,

        frame: false,
        thickFrame: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    window.removeMenu()

    if (isDev) {
        window.loadURL("http://localhost:5173")
        window.webContents.openDevTools()
    } else {
        window.loadFile(path.join(__dirname, "../dist/index.html"))
    }
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow()
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit()
})