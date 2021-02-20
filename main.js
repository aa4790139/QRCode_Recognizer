//*************************************************************************
//     创建日期:     2021-02-20 09:02:25
//     文件名称:     main.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//     参考文章：    https://ourcodeworld.com/articles/read/271/how-to-decode-a-qr-code-from-an-image-with-javascript
//*************************************************************************

const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
