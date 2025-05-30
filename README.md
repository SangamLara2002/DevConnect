# 🚀 DevConnect – A Scalable MERN Developer Social Platform

**DevConnect** is a full-featured social platform for developers built using the **MERN stack (MongoDB, Express, React, Node.js)**. It supports authentication, user profiles, posts, real-time chat, notifications, and an admin panel for managing the platform. Designed with scalability, security, and user experience in mind.

---

## 📸 Screenshots

> _Add screenshots or screen recordings here once frontend is ready_

---

## 📁 Project Structure

devconnect/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── services/
│ └── App.jsx
│
├── server/ # Express backend
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── .env
├── package.json
├── README.md


---

## 🎯 Key Features

### 👥 User Panel
- User registration & login (JWT-based)
- Secure password hashing with bcrypt
- Role-based access (admin & user)
- Profile creation and editing
- Create, like, comment on posts
- Follow/unfollow functionality
- Real-time private messaging
- Notification system
- Mobile-responsive UI (React + Tailwind)

### 🛡️ Admin Panel
- View all users
- Block/unblock users
- View and delete posts
- Manage reported content

### 🛠️ Dev & Prod Features
- CORS & Helmet for API security
- Centralized error handling
- MongoDB indexes for fast querying
- Deployment-ready (Render, Vercel, Railway, Netlify)

---

## ⚙️ Technologies Used

| Stack         | Libraries/Frameworks                     |
|---------------|------------------------------------------|
| Frontend      | React, React Router, Axios, Tailwind CSS |
| Backend       | Node.js, Express.js                      |
| Database      | MongoDB (Mongoose ORM)                   |
| Auth          | JWT, bcrypt                              |
| Realtime Chat | Socket.IO                                |
| State Mgmt    | React Context API                        |
| Deployment    | Vercel (frontend), Render/Railway (API)  |

---

## 📦 Backend API Endpoints

### 🔐 Auth Routes `/api/auth`
- `POST /register` – Register new user
- `POST /login` – Login and get token

### 👑 Admin Routes `/api/admin`
- `GET /users` – Get all users
- `PUT /block/:id` – Block user
- `PUT /unblock/:id` – Unblock user

### 🧑‍🤝‍🧑 User Routes `/api/user`
- `GET /profile/:id` – Get user profile
- `PUT /profile` – Update profile

### 📝 Post Routes `/api/posts`
- `POST /` – Create post
- `GET /` – Get all posts
- `PUT /like/:id` – Like post
- `POST /comment/:id` – Add comment

### 💬 Chat Routes `/api/chat`
- `GET /conversations` – Get chat list
- `POST /message/:id` – Send message

---

## 🧪 Run Locally

### 📌 Prerequisites
- Node.js v18+
- MongoDB local/cloud (MongoDB Atlas)

---

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/devconnect.git
cd devconnect
