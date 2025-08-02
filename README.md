<p align="right">
  <img src="https://imgur.com/xAToaxU" width="80" style="border-radius: 8px;">
</p>

#

---

## 📂 Project Structure

```
src/
├── auth/           # Login, signup, JWT creation and verification
├── common/
│   └── guards/     # JWT & role guards
├── shift/          # Shift CRUD operations
├── tasks/          # Mission CRUD operations
├── users/          # Soldiers and commanders management
├── app.module.ts   # Main module
└── main.ts         # Entry point
```

---

## 🛠️ Features

* JWT-based authentication
* Role-based authorization: commander / soldier
* Three main tables: `users`, `tasks`, `shift`
* Guards to restrict access based on role
* Hashed passwords with `bcrypt`
* Data managed with TypeORM and MySQL (phpMyAdmin)

---

## 📋 Table Overview

### Users Table

* **Create soldier/commander**: open to all (no auth required)
* **Delete, Get All, Get by ID**: commander only

### Tasks Table

* Fields: `id`, `description`
* Full CRUD: commander only

### Shift Table

* Fields: `start_time`, `end_time`, `user_id`, `task_id`
* **Create, Delete, Get All**: commander only
* **Get soldier's shifts**: accessible by that soldier (via token)

---

## 🔐 Auth Flow

* `/auth/login`: login and receive JWT
* `/auth/signing`: validate JWT (used by guards internally)
* Passwords hashed with `bcrypt` using a secret key
* JWT contains role (`soldier` or `commander`) and `userId`

---

## 🛡️ Guards

* `JwtGuard`: Validates the presence and integrity of the token
* `RolesGuard`: Checks whether the user has access to specific routes

> ⚠️ Public route: only `POST /users` (register soldier/commander) is available without a token.

---

## 🚀 Getting Started

### Prerequisites

* Node.js & npm
* MySQL/phpMyAdmin installed and running

### Installation

```bash
npm install
```

### Run the App

```bash
# Development
npm run start

# Watch mode (auto reload)
npm run start:dev
```

---

## 🧪 Example curl requests

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "yoel", "password": "1234"}'
```

### Create a New User (Soldier/Commander)

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"username": "newUser", "password": "pass123", "role": "soldier"}'
```

---

## 📦 Deployment

This project is currently used for local development only.

---

## 🧠 Developer Notes

* Built using NestJS framework
* Organized by modules (feature-based structure)
* Database structure can be found inside your MySQL/phpMyAdmin instance

---

## 📌 GitHub

Project repository: [https://github.com/yoel-cmd/nestProject](https://github.com/yoel-cmd/nestProject)

---

## ✍️ Author

<p align="left">
  <img src="https://i.imgur.com/KbzDh6N.jpeg" width="80" style="border-radius: 6px;">
</p>

**Yoel Eder**
A highly motivated full-stack developer passionate about backend security and military tech.

---

## �� License

This project is licensed under the MIT License.
