# Url_Shortener

# 🔗 URL Shortener

A simple **URL Shortener** web application built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.  
It allows users to create short URLs, view their own URLs, and includes role-based access control so admins can view all URLs.

---

## 🚀 Features

- **User Registration & Login**
- **JWT-based Authentication**
- **Role-based Access Control**  
  - **Admin** → Can view all URLs  
  - **User** → Can only view URLs they created
- **URL Shortening**
- **EJS Templating for Views**
- **REST API Support** for external testing
- **Password Hashing** with bcrypt
- **Secure Routes** using middleware

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **View Engine**: EJS
- **Password Security**: bcrypt
- **API Testing**: REST API (Postman/Thunder Client)
- **Other Tools**: dotenv for environment variables
  
---

## 📦 Dependencies

```json
{
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.2",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0",
    "nanoid": "^5.0.4"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

---

## 📸 Screenshots

### SignUp Page  
![SignUp Page Screenshot](https://github.com/Shubha81149/Url_Shortener/blob/main/assest/SignUp.png?raw=true)

### Login Page  
![Login Page Screenshot](https://github.com/Shubha81149/Url_Shortener/blob/main/assest/Login.png?raw=true)

### Admin Page  
![Admin Page Screenshot](https://github.com/Shubha81149/Url_Shortener/blob/main/assest/Admin.png?raw=true)

### User Page  
![User Page Screenshot](https://github.com/Shubha81149/Url_Shortener/blob/main/assest/User.png?raw=true)
