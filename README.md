# ☕ Brew & Bloom Coffee - Full-Stack E-Commerce Project

An artisan coffee shop web application built with **React** on the frontend and **Node.js + Express.js** on the backend.

---

## 📁 Project Structure

```
homework-react-app/
├── frontend/             # React 19 + Vite + Tailwind CSS Frontend UI
│   ├── src/
│   │   ├── components/   # Header, Hero, Menu, CartPage, CheckoutPage, OrderConfirmation...
│   │   ├── data/         # 4 Signature Coffee products & bakery items
│   │   └── Home.jsx      # Main layout & state management
│   ├── index.html
│   └── package.json
│
├── backend/              # Node.js + Express.js REST API Server
│   ├── data/             # 5 ERD Mock tables (Categories, Products, Customers, Orders...)
│   ├── server.js         # Express server endpoints
│   ├── README.md         # API documentation & endpoint test links
│   └── package.json
│
├── .gitignore            # Git ignore configuration
└── README.md             # Project overview
```

---

## 🚀 Quick Start Guide

### 1. Run the Frontend (React UI)

```bash
cd frontend
npm install
npm run dev
```
Open **`http://localhost:5173`** (or port specified by Vite) in your browser.

### 2. Run the Backend (Express API)

Open a new terminal window:
```bash
cd backend
npm install
npm run dev
```
Open **`http://localhost:5000`** to access the interactive API dashboard.

---

## ✨ Features Implemented
- **Exercise 1 (Products & Shopping Cart):** Browse 4 signature coffees + pastries, add to cart, update quantity (+/-), remove item, live subtotal & grand total calculation.
- **Exercise 2 (Checkout Form):** Customer details form (First/Last name, Email, Phone, Address), form validation, shipping method selection, live order summary.
- **Exercise 3 (Order Confirmation):** Order ID (`ORD-0001`), order date, customer name, ordered products table, total amount, order status `Pending`.
- **Exercise 4 (Database ERD):** 5 relational tables (`Categories`, `Products`, `Customers`, `Orders`, `Order_Items`).
