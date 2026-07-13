# 🛒 Mini E-Commerce Backend API

A RESTful Backend API for an E-Commerce application built using **Node.js, Express.js, MongoDB, and JWT Authentication**.

This project provides APIs for user authentication, product management, category management, and shopping cart operations.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)

- 🔑 JWT Protected Routes

- 📂 Category Management

- 📦 Product Management

- 🛍️ Shopping Cart

- 🗄️ MongoDB Atlas Integration

- 📝 RESTful API Structure

---

## 🛠 Tech Stack

- Node.js

- Express.js

- MongoDB Atlas

- Mongoose

- JWT

- bcryptjs

- dotenv

- Nodemon

---

## 📁 Project Structure

```

Mini-Ecommerce/

│

├── server/

│   ├── config/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── utils/

│   ├── app.js

│   ├── server.js

│   └── package.json

│

├── client/

│

└── [README.md](http://README.md)

```

---

## ⚙️ Installation

Clone the repository

```bash

git clone [https://github.com/ayushO2/Mini_ecommerce.git](https://github.com/ayushO2/Mini_ecommerce.git)

```

Go to project directory

```bash

cd Mini_ecommerce/server

```

Install dependencies

```bash

npm install

```

Create `.env`

```env

PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

```

Start Server

```bash

npm run dev

```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint |

|--------|----------|

| POST | /api/auth/register |

| POST | /api/auth/login |

### Categories

| Method | Endpoint |

|--------|----------|

| GET | /api/categories |

| POST | /api/categories |

| PUT | /api/categories/:id |

| DELETE | /api/categories/:id |

### Products

| Method | Endpoint |

|--------|----------|

| GET | /api/products |

| GET | /api/products/:id |

| POST | /api/products |

| PUT | /api/products/:id |

| DELETE | /api/products/:id |

### Cart

| Method | Endpoint |

|--------|----------|

| POST | /api/cart |

| GET | /api/cart |

| DELETE | /api/cart/:productId |

---

## 👨‍💻 Author

**Ayush Kumar Sah**

GitHub:

[https://github.com/ayushO2](https://github.com/ayushO2)