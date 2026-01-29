# Church Management System

A full-stack web application for managing church members, check-ins, and administrative tasks. Built with React for the frontend and Node.js/Express for the backend, using MongoDB for data storage.

## Features

- User onboarding with form submission and photo upload
- Admin login and panel for managing members
- Member check-in functionality
- Email notifications
- Responsive design with Bootstrap

## Tech Stack

### Frontend
- React 19
- React Bootstrap
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Nodemailer for emails
- Passport.js for authentication

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or cloud service like MongoDB Atlas)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd church
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Copy `server/.env.example` to `server/.env` (if exists, otherwise create)
   - Configure the following variables in `server/.env`:
     ```
     MONGODB_URI=mongodb://localhost:27017/church
     JWT_SECRET=your_jwt_secret
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_password
     PORT=5000
     ```

## Running the Application

1. Start MongoDB (if running locally):
   ```bash
   mongod
   ```

2. Start the server:
   ```bash
   cd server
   npm start
   ```
   The server will run on http://localhost:5000

3. Start the client (in a new terminal):
   ```bash
   cd client
   npm start
   ```
   The client will run on http://localhost:3000

## Building for Production

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. The build files will be in `client/build/`

## Deployment

### Backend Deployment (e.g., to Heroku)

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy the server folder

### Frontend Deployment (e.g., to Netlify or Vercel)

1. Build the client as above
2. Deploy the `build` folder to your hosting service
3. Configure API calls to point to your deployed backend URL

### Full-Stack Deployment

For platforms like Heroku that support full-stack apps, you can deploy both client and server together.

## Project Structure

```
church/
├── client/          # React frontend
│   ├── public/      # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   └── ...
├── server/          # Node.js backend
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   ├── middleware/  # Express middleware
│   └── ...
└── README.md
```

## Recent Updates

- Set background image for UserOnboarding component to `christians.jpg` from the public folder for better visual appeal.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
