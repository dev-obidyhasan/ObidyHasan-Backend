# ⚡ Obidy Hasan Naim - Portfolio Backend

This is the backend API for my personal portfolio website, providing essential services such as authentication, project data management, and contact form handling.

## 🌐 Live Deployment

Experience the live backend here:

👉 [portfolio-naim-backend.vercel.app](https://portfolio-naim-backend.vercel.app)

## 📋 Project Overview

This backend API supports the frontend portfolio by:

- **User Authentication**: Secure login endpoints.
- **Skill Data**: CRUD operations for managing skill information.
- **Project Data**: CRUD operations for managing project information.
- **Blog Data**: CRUD operations for managing blog information.
- **Contact Form**: Endpoint to handle messages sent via the contact form.

## 🚀 Features

- **RESTful API**: Clean and intuitive endpoints.
- **JWT Authentication**: Secure user sessions.
- **Prisma ORM**: Efficient database interactions.
- **Vercel Deployment**: Seamless deployment and scaling.

## 🛠️ Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Vercel

## ⚙️ Setup Instructions

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-obidyhasan/ObidyHasan-Backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ObidyHasan-Backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_database_url` with your PostgreSQL connection string and `your_jwt_secret` with a secret key for JWT signing.

5. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. The API will be running at `http://localhost:4000`.

## 📝 Notes

- Ensure you have Node.js and npm installed.
- This backend is designed to work seamlessly with the [ObidyHasan frontend](https://github.com/dev-obidyhasan/ObidyHasan).
- Contributions and feedback are welcome!
