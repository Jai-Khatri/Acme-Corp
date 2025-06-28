# 🧠 Acme Corp – Weight Loss Tracker Dashboard

A full-stack dashboard that helps users track their weight loss journey, including progress, BMI, pills taken, shipment reminders, and visual insights via charts.

---

## 🚀 Features

- ✅ Signup & Login functionality with secure JWT auth  
- 📈 Track weight loss and health metrics  
- 📦 Get next shipment reminders  
- 📊 View progress through charts  
- ⚖️ Metrics like BMI, current weight, pills taken, days left  
- 🌙 Modern, dark-themed responsive UI  
- 🔐 Auth-protected user data via token  
- ⚛️ Zustand for state management  
- 📉 Charts using Recharts  

---

## 🧱 Tech Stack

| Layer       | Tech                          |
|------------|-------------------------------|
| Frontend   | React (with Vite), Tailwind CSS, Zustand |
| Backend    | Node.js + Express             |
| Database   | MongoDB (Mongoose)            |
| Auth       | JWT (JSON Web Token)          |
| Charts     | Recharts                      |
| Routing    | React Router DOM              |

---

## 📦 Installation

git clone https://github.com/Jai-Khatri/Acme-Corp.git
cd Acme-Corp

# Frontend


cd frontend/acmecorp <br>
npm install

# Backend

cd ../../backend <br>
npm install

Inside the /backend folder, create a .env file and add the following:

PORT=3000 <br>
MONGODB_URL=example mongodb url <br>
JWT_SECRET=mysecretkey123 <br>

# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend/acmecorp
npm run dev


Frontend: http://localhost:5173
Backend: http://localhost:3000

---

# 🤝 Contributing <br>
Feel free to fork the project and open pull requests!
For any issues or feature requests, open an issue on GitHub.

---

# 👨‍💻 Author <br> 
Jai Khatri <br> 
GitHub: @Jai-Khatri <br>
