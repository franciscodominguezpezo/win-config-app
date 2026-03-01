# 🪟 Win Config App

Aplicación de escritorio construida con **Electron + Node.js** que permite aplicar configuraciones del sistema en Windows mediante PowerShell.

---

## 📌 Descripción

Win Config App es una herramienta de escritorio para Windows diseñada para simplificar tareas de configuración del sistema como:

- Activar/desactivar modo oscuro
- Gestionar configuraciones de Windows mediante PowerShell
- Aplicar ajustes del sistema de forma programática
- Servir como base arquitectónica para herramientas avanzadas de configuración

Este proyecto está pensado como una base escalable para construir un gestor de configuraciones de Windows más completo.

---

## 🏗️ Estructura del Proyecto

```
win-config-app/
│
├── main.js              # Proceso principal de Electron
├── preload.js           # Puente seguro IPC
├── package.json
│
├── renderer/            # Capa frontend
│   ├── index.html
│   ├── renderer.js
│   └── styles.css
│
└── services/            # Lógica backend
    └── systemService.js
```

---

## ⚙️ Instalación

```bash
git clone https://github.com/franciscodominguezpezo/win-config-app.git
cd win-config-app
npm install
```

---

## 🚀 Ejecutar la aplicación

```bash
npm start
```

---

## 🧠 Cómo funciona

- El **renderer process** gestiona la interfaz de usuario.
- El **main process** escucha eventos IPC.
- El backend ejecuta comandos PowerShell usando `node-powershell`.
- La comunicación segura se realiza mediante `preload.js` utilizando `contextBridge`.

---

## 📦 Dependencias

- Electron
- node-powershell

---

## 🔐 Consideraciones de Seguridad

- `contextIsolation` habilitado
- `nodeIntegration` deshabilitado
- Comunicación IPC controlada
- Ejecución de PowerShell encapsulada en la capa de servicios

---

## 🎯 Roadmap

- Detección de privilegios de administrador
- Módulo de configuración de red
- Módulo de gestión de energía
- Módulo de gestión de usuarios
- Exportar/importar perfiles de configuración
- Generar instalador con electron-builder
- Sistema de logs
- Soporte para rollback de configuraciones

---

## 📄 Licencia

ISC License

---

# 🪟 Win Config App (English Version)

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
