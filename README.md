

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

# Watch mode (auto reload)
npm run start:dev
```


---

## 📦 Deployment

This project is currently used for local development only.


**Yoel Eder**
A highly motivated full-stack developer passionate about backend security and military tech.

---



This project is licensed under the MIT License.
