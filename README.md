# SmartFridge

# 🧊 SmartFridge – Deine digitale Kühlschrankverwaltung

 Web-App zur Verwaltung von Kühlschrankinhalten. Mit dieser Anwendung kannst du Produkte hinzufügen, aktualisieren, löschen und nach Ablaufdatum sortieren 

## 🌐 Live-Demo

👉 **Frontend (Live & öffentlich zugänglich):**  
[https://smartfridge-3.onrender.com](https://smartfridge-3.onrender.com)

📡 **Backend (über MongoDB Atlas verbunden):**  
[https://smartfridge-tvaz.onrender.com](https://smartfridge-tvaz.onrender.com) *(nur für API-Zugriffe)*

---

## ✨ Features

- ✅ Produkte **hinzufügen**, **bearbeiten** und **löschen**
- 📆 Sortierung nach **Verfallsdatum** oder **Menge**
- 🔍 Integrierte **Suche**
- 🖱️ Drag-and-Drop für das Formular
- ☁️ **Deployment** auf Render (Frontend & Backend)
- 🌿 Datenhaltung in **MongoDB Atlas**

---

## 📸 Screenshots

![317EC646-1D93-42D7-92D9-E239E4A79CBB](https://github.com/user-attachments/assets/76fa1f42-4f6c-447c-b7ae-f1121859f0cc)

![F21A7761-C752-4A12-86CA-6D80F65D956F](https://github.com/user-attachments/assets/a79a735a-bc1e-449c-8bdd-edfa136ec3e8)

![878ED520-EE0C-4D69-A063-B64AD09F967B](https://github.com/user-attachments/assets/f9ca09ad-0db2-4ad9-b473-f2f7c25c5fbf)

---

## 🛠️ Tech-Stack

- **Frontend:** Angular 19 (Standalone Components, Angular Forms, Angular CDK)
- **Backend:** Node.js + Express
- **Datenbank:** MongoDB Atlas
- **Deployment:** Render (automatisiert via `render.yaml`)

---
Chatgpt zum debuggen und hilfestellung, 
Fehlersuche, weil oftmals zu viel code und wenn man sich nicht sicher ist welche dateien und Stellen miteinandner zusammenhängen

## 🚀 Projekt lokal starten

Falls du das Projekt lokal ausführen willst:

```bash
# Frontend
cd smafri
npm install
ng serve

# Backend
cd smafri/backend
npm install
node server.js
