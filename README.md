# 🚀 MERN Advanced Authentication System with Zustand

A **full-stack authentication system** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Zustand** for state management and **Mailtrap** for email verification. This project includes **signup, login, email verification, password reset**, and session management.

## 📌 Features

✅ User Signup & Login  
✅ Email Verification using **Mailtrap**  
✅ Protected Routes (Only authenticated users can access certain pages)  
✅ Password Reset via Email  
✅ Persistent Authentication using **JWT & HttpOnly Cookies**  
✅ State Management with **Zustand**  
✅ Responsive UI with React  
✅ Secure API with Express.js  

---

## 🛠 Tech Stack

### **Frontend** (Client)
- **React.js** - Frontend framework
- **React Router** - Navigation & route protection
- **Zustand** - Lightweight state management
- **React Hot Toast** - Notifications & alerts

### **Backend** (Server)
- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **MongoDB & Mongoose** - NoSQL database & ODM
- **JWT (JSON Web Tokens)** - Secure authentication
- **Mailtrap** - Email service for verification & password reset
- **Bcrypt.js** - Password hashing
- **Cors & Cookie-Parser** - Secure session handling

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/mern-auth-zustand.git
cd mern-auth-zustand
```

### 2️⃣ Install Dependencies
#### **Backend**
```sh
cd server
npm install
```
#### **Frontend**
```sh
cd client
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the **server** directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Run the Application
#### **Start Backend**
```sh
cd server
npm run dev
```
#### **Start Frontend**
```sh
cd client
npm run dev
```

---

## 🔐 API Endpoints
### **Authentication Routes**
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/auth/signup`       | Register new user |
| POST   | `/api/auth/login`        | User login |
| POST   | `/api/auth/logout`       | Logout user |
| POST   | `/api/auth/verify-email` | Verify email |
| GET    | `/api/auth/check-auth`   | Check auth status |
| POST   | `/api/auth/forgot-password` | Request password reset |
| POST   | `/api/auth/reset-password/:token` | Reset password |

---

## 💡 Contributing
Pull requests are welcome! If you have suggestions or improvements, feel free to fork the repo and submit a PR.

---

## 📄 License
This project is licensed under the **MIT License**.

---

### 🎉 Happy Coding! 🚀

