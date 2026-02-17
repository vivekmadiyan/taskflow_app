🚀 TaskFlow – Secure Task Management Dashboard
📌 Project Overview

TaskFlow is a full-stack scalable web application that provides secure user authentication and a protected dashboard for managing tasks.

It demonstrates:

JWT-based authentication

Protected API routes

Secure password hashing

Full CRUD operations

Search & filtering

Clean UI with responsive design

The project is built with a modern frontend using Next.js + Tailwind CSS and a secure backend using Node.js + Express + MongoDB.

🛠 Tech Stack
Frontend

Next.js (App Router)

React Hooks

Tailwind CSS

Client-side routing

Fetch API

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT (jsonwebtoken)

bcrypt (password hashing)

Custom authentication middleware

🔐 Authentication & Security

Passwords securely hashed using bcrypt

JWT tokens generated on login

Protected routes using middleware

Token validation for secured APIs

Duplicate username/email handling

Proper HTTP status codes (400, 401, 409, 500)

User-specific task isolation

📊 Dashboard Features

User Registration

Secure Login

Protected Dashboard

Create Task

View Tasks (user-specific)

Update Task (mark complete / undo)

Delete Task

Search Tasks

Filter Tasks (All / Completed / Pending)

Loading & Empty states

Logout functionality

📡 API Endpoints
Authentication
POST   /api/auth/register
POST   /api/auth/login

Tasks (Protected)
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id

Protected routes require:
Authorization: Bearer <JWT_TOKEN>

⚙️ How to Run Locally
1️⃣ Clone Repository
git clone <your-repo-url>

2️⃣ Backend Setup
cd server
npm install


Create .env file inside server folder:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key


Start backend:

npm start


Server runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd client
npm install


Create .env.local inside frontend folder:

NEXT_PUBLIC_API_URL=http://localhost:5000/api


Start frontend:

npm run dev


Frontend runs at:

http://localhost:3000

🏗 Project Structure
server/
  models/
  controllers/
  routes/
  middleware/
  server.js

client/
  app/
    page.js
    login/
    register/
    dashboard/
  components/

📈 Scalability Considerations

For production-level scaling, the following improvements can be implemented:

Refresh token strategy

HTTP-only cookies instead of localStorage

Rate limiting middleware

Redis caching layer

Role-Based Access Control (RBAC)

Logging & monitoring (Winston / Morgan)

Horizontal backend scaling

Environment-based configuration management

🌐 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🎯 Evaluation Alignment

✔ Modern Responsive UI
✔ Secure JWT Authentication
✔ Password Hashing
✔ Protected Routes
✔ Full CRUD Operations
✔ Clean Folder Structure
✔ Scalable Architecture

👨‍💻 Author

Vivek Madiyan