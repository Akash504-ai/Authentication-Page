# 🔐 Authentication Page with React & Auth0

This is a basic **Authentication Page** built using **React** (Vite) and **Auth0**, supporting:
- 🔑 Email & Password Login
- 🌐 Google OAuth
- 🐙 GitHub OAuth
- 💼 LinkedIn OAuth

---

## 📂 Folder Structure

Authentication_page/
├── public/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── .gitignore
├── index.html
├── package.json
└── vite.config.js


---

## 🔧 Tech Stack

- ⚛️ React (with Vite)
- 🛡️ Auth0 React SDK
- 🧪 JavaScript (ES6+)
- 💅 CSS (Optional UI customization)
- ☁️ GitHub (for version control)

---

## 📸 Screenshots

<img width="392" height="736" alt="image" src="https://github.com/user-attachments/assets/34880d41-ba02-4e4c-aa9d-c8165f6d08b8" />


---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/Akash504-ai/Authentication-Page.git
cd Authentication-Page
npm install
npm run dev

---

🧠 How It Works
Uses @auth0/auth0-react to manage authentication.

loginWithRedirect() handles login.

logout() clears session and redirects.

isAuthenticated controls conditional UI rendering.

---

🔒 Auth0 Setup (Steps)
Go to Auth0 Dashboard

Create an Application

Add http://localhost:5173 in Allowed Callback URLs & Logout URLs

Install SDK:

npm install @auth0/auth0-react

---Wrap your app with Auth0Provider in main.jsx

<Auth0Provider
  domain="your-domain"
  clientId="your-client-id"
  authorizationParams={{ redirect_uri: window.location.origin }}
>
  <App />
</Auth0Provider>


✨ Features
✔️ Simple and clean UI

✔️ Conditional rendering based on login state

✔️ Easy to extend for protected routes

📌 Author
Akash Santra

📃 License
This project is open-source and available under the MIT License.
