const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { runPowerShell } = require("./services/systemService");

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile("./renderer/index.html");
}

app.whenReady().then(createWindow);

ipcMain.handle("set-dark-mode", async () => {
  return await runPowerShell(`
    Set-ItemProperty -Path HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize -Name AppsUseLightTheme -Value 0
  `);
});
