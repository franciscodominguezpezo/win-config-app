# 🪟 Win Config App

Desktop application built with **Electron + Node.js** that allows users to apply Windows system configurations using PowerShell.

---

## 📌 Description

Win Config App is a Windows desktop tool designed to simplify system configuration tasks such as:

- Enabling/disabling dark mode
- Managing Windows settings via PowerShell
- Applying system tweaks programmatically
- Serving as a base architecture for advanced system configuration tools

This project is intended as a scalable foundation for building a Windows configuration manager.

---

## 🏗️ Project Structure

```
win-config-app/
│
├── main.js              # Electron main process
├── preload.js           # Secure IPC bridge
├── package.json
│
├── renderer/            # Frontend layer
│   ├── index.html
│   ├── renderer.js
│   └── styles.css
│
└── services/            # Backend logic
    └── systemService.js
```

---

## ⚙️ Installation

```bash
git clone https://github.com/franciscodominguezpezo/win-config-app.git
cd win-config-app
npm install
```

---

## 🚀 Run the App

```bash
npm start
```

---

## 🧠 How It Works

- The **renderer process** handles the UI.
- The **main process** listens for IPC events.
- The backend executes PowerShell commands using `node-powershell`.
- Secure communication is handled through `preload.js` using `contextBridge`.

---

## 📦 Dependencies

- Electron
- node-powershell

---

## 🔐 Security Considerations

- `contextIsolation` enabled
- `nodeIntegration` disabled
- Controlled IPC communication
- PowerShell execution encapsulated in service layer

---

## 🎯 Roadmap

- Administrator privilege detection
- Network configuration module
- Power management module
- User management module
- Export/import configuration profiles
- Build installer with electron-builder
- Logging system
- Configuration rollback support

---

## 📄 License

ISC License

---

# 🪟 Win Config App (English Version)

## 📌 Description

Win Config App is a desktop application built with **Electron and Node.js** that allows users to manage Windows configurations through PowerShell scripts.

It is designed as a foundation for creating advanced Windows configuration tools.

---

## 🏗️ Architecture Overview

- Electron main process
- Secure preload bridge
- Renderer (UI layer)
- Modular service-based backend
- PowerShell execution through Node.js

---

## ⚙️ Setup

```bash
npm install
npm start
```

---

## 🚀 Features Implemented

- Dark mode toggle via registry modification
- IPC-based secure communication
- Modular service architecture

---

## 🔮 Future Improvements

- Administrator execution level
- System dashboard
- Network configuration management
- Installer generation (.exe)
- Logging system
- Configuration rollback support
