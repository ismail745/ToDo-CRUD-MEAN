# 📝 ToDo App – MEAN Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white\&style=flat)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular\&logoColor=white\&style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb\&logoColor=white\&style=flat)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express\&logoColor=white)
![MIT License](https://img.shields.io/badge/License-ISC-blue.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

> Application de gestion des tâches construite avec la stack **MEAN** (MongoDB, Express.js, Angular, Node.js).
> Elle illustre les bonnes pratiques d'une architecture full-stack moderne, RESTful, modulaire et scalable.

---

## 📚 Sommaire

* [📷 Aperçu](#-aperçu)
* [🚀 Fonctionnalités](#-fonctionnalités)
* [🛠️ Technologies](#️-technologies)
* [📦 Prérequis](#-prérequis)
* [⚙️ Installation](#️-installation)
* [📁 Structure du projet](#-structure-du-projet)
* [🔌 API REST](#-api-rest)
* [✅ Tests](#-tests)
* [🤝 Contribution](#-contribution)
* [📄 Licence](#-licence)


## 🚀 Fonctionnalités

* 🆕 Ajouter une tâche avec un formulaire dynamique
* 📋 Voir toutes les tâches dans une liste responsive
* ✅ Cocher les tâches comme terminées
* 🗑️ Supprimer une tâche instantanément
* 🔄 Mise à jour temps réel avec HTTP & Observables (RxJS)

---

## 🛠️ Technologies

### 🖥️ Frontend

* Angular `^19.2.3`
* TypeScript
* Angular CLI
* RxJS / HttpClient

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📦 Prérequis

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* Angular CLI (`npm install -g @angular/cli`)

---

## ⚙️ Installation

### 🔹 Cloner le projet

```bash
git clone https://github.com/ismail745/mean-todo-app.git
cd mean-todo-app
```

### 🔹 Démarrer le backend

```bash
cd backend
npm install
npm start
```

> 📡 L’API sera disponible sur `http://localhost:3000`

### 🔹 Démarrer le frontend

```bash
cd ../frontend
npm install
ng serve
```

> 🌐 L'application sera accessible sur `http://localhost:4200`

---

## 📁 Structure du projet

```
mean-todo-app/
├── backend/
│   ├── config/           # Configuration MongoDB
│   ├── controllers/      # Logique métier
│   ├── models/           # Schémas Mongoose
│   ├── routes/           # Routes Express
│   └── server.js         # Point d'entrée backend
├── frontend/
│   └── src/app/
│       ├── components/   # Composants Angular
│       ├── services/     # Services Angular
│       └── models/       # Interfaces TypeScript
```

---

## 🔌 API REST

| Méthode | Endpoint         | Description                  |
| ------- | ---------------- | ---------------------------- |
| GET     | `/api/`     | Récupérer toutes les tâches  |
| POST    | `/api/`     | Créer une nouvelle tâche     |
| PUT     | `/api/:id` | Modifier une tâche existante |
| DELETE  | `/api/:id` | Supprimer une tâche          |

---

## ✅ Tests

### Frontend

```bash
ng test
```

### Backend

```bash
npm test
```

---

## 🤝 Contribution

Les contributions sont **les bienvenues** !
Merci de suivre ces étapes :

1. Fork le projet 🍴
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Committez vos modifications (`git commit -am 'Ajout d’une fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une *Pull Request*

---

## 📄 Auteur
Ismail Kchibal
