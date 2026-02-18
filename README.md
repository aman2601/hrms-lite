# 🚀 HRMS Lite – Lightweight Human Resource Management System

## 📌 Project Overview

HRMS Lite is a full-stack web application that allows an admin to manage employee records and track daily attendance.

The system includes:

- Employee Management (Add, View, Delete)
- Attendance Tracking (Present / Absent)
- Dashboard Summary
- Clean and professional UI

This project demonstrates full-stack development using React (Frontend) and FastAPI (Backend).

---

# 🛠 Tech Stack

## Frontend
- React (Vite)
- React Router DOM
- Axios
- Custom CSS

## Backend
- FastAPI
- SQLAlchemy
- Uvicorn

## Database
- SQLite (Local Development)

## Deployment
- Frontend: Vercel
- Backend: Render

---

# 📂 Project Structure

hrms-lite/
│
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── routes/
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── package.json
│ ├── vite.config.js
│ └── index.html
│
└── README.md


---

# 🖥️ Running the Project Locally

---

## 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/aman2601/hrms-lite.git
cd hrms-lite


🔹 Step 2: Setup and Run Backend
2.1 Navigate to Backend Folder
cd backend

2.2 Create Virtual Environment
python -m venv venv

2.3 Activate Virtual Environment

Windows

venv\Scripts\activate


Mac/Linux

source venv/bin/activate

2.4 Upgrade Pip (Recommended)
python -m pip install --upgrade pip

2.5 Install Backend Dependencies
pip install -r requirements.txt

2.6 Run Backend Server
python -m uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000


API documentation available at:

http://127.0.0.1:8000/docs

🔹 Step 3: Setup and Run Frontend
3.1 Open a New Terminal and Navigate to Frontend Folder
cd frontend

3.2 Install Frontend Dependencies
npm install

3.3 Run Frontend Development Server
npm run dev


Frontend runs at:

http://localhost:5173
