# CRM Dashboard App

This is a **CRM-like Dashboard application** built using **React.js**, **Redux Toolkit**, and **DummyJSON API**. It supports user authentication, product management, dynamic charting, and responsive layouts with component-based structure.

## 🚀 Features

- 🔐 **Login Functionality**
  - Authenticates user using DummyJSON API (`https://dummyjson.com/auth/login`)
  - Stores JWT token in Redux and `localStorage`
  - Protects private routes (e.g., Dashboard)

- 📦 **Product Listing**
  - Fetches products from DummyJSON (`https://dummyjson.com/products`)
  - Displays initial 10 products, with a **"Show More"** button to load more
  - Prevents duplicate products from being shown

- 📊 **Analytics Dashboard**
  - Integrated charting section for product stats
  - Uses product prices to generate bar/pie charts
  - Scrollable right panel for viewing content without affecting sidebar

- 👤 **User Profile & Sidebar**
  - Displays `username` on the sidebar from Redux store
  - Fully responsive and scroll-independent layout
  - Left sidebar fixed; right section scrolls independently

- 🧭 **Navigation**
  - Structured into `Login`, `Dashboard`, and `Products`
  - Sidebar acts as persistent navigation

## 📁 Project Structure

src/
├── components/
│ ├── LeftComponent.jsx
│ ├── ProductCard.jsx
│ └── ChartComponent.jsx
├── pages/
│ ├── Login.jsx
│ └── Dashboard.jsx
├── redux/
│ ├── store.js
│ ├── slices/
│ │ ├── authSlice.js
│ │ └── productSlice.js
│ └── thunks/
│ ├── authThunks.js
│ └── productThunks.js
├── App.jsx
├── index.js
└── App.cs


## 🧠 Technologies Used

- **Frontend**: React.js, React Router
- **State Management**: Redux Toolkit
- **API**: [DummyJSON](https://dummyjson.com/)
- **Charting**: Recharts
- **CSS**: Flexbox, Responsive Layouts For Desktop Only

## 🛠 Setup & Run

### 1. Clone the Repository

```bash
git clone https://github.com/KESHUKUMAR1909/Dummy-json-frontend

