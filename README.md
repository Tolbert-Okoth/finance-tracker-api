Finance Tracker API

A simple Finance Tracker REST API built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage income/expense transactions with categories.

✨ Features

🔐 User Authentication (JWT)

➕ Add income/expense transactions

📂 Categorize transactions

📊 Generate reports (summary, monthly, top categories)

🛡️ Input validation & error handling

🌍 Ready for deployment (MongoDB Atlas + Render/Railway)

🛠️ Tech Stack

Backend: Node.js, Express

Database: MongoDB + Mongoose

Auth: JWT + bcrypt

Validation: express-validator

Tools: Nodemon, dotenv


📂 Project Structure
finance-tracker-api/
├── server.js              # Entry point
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── User.js            # User schema
│   └── Transaction.js     # Transaction schema
├── routes/
│   ├── auth.js            # Auth routes
│   └── transactions.js    # Transaction routes
├── controllers/
│   ├── authController.js  # Auth logic
│   └── transactionController.js # Transaction logic
├── middleware/
│   └── authMiddleware.js  # Protect routes
├── .env                   # Environment variables
├── package.json
└── README.md

⚙️ Setup Instructions

Clone the repo

git clone https://github.com/Tolbert-Okoth/finance-tracker-api.git
git
cd finance-tracker-api


Install dependencies

npm install


Set environment variables in .env file

PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key


Run the app

npm run dev

🔑 API Endpoints
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login & get JWT

Transactions

GET /api/transactions → Get all user transactions

POST /api/transactions → Add transaction

PUT /api/transactions/:id → Update transaction

DELETE /api/transactions/:id → Delete transaction

Reports (future feature)

GET /api/reports/summary

GET /api/reports/monthly

GET /api/reports/top-categories

🛠️ Development

Run in dev mode: npm run dev

Run in production: npm start

📌 Future Improvements

Add pagination & sorting

Add categories management

Export reports to CSV/Excel

Frontend dashboard (React)

📄 License

MIT License © 2025