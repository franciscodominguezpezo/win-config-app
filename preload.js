const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  enableDarkMode: () => ipcRenderer.invoke("set-dark-mode"),
});
