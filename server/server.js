require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const connectDB = require('./db');

const app = express();

// Connect to MongoDB
connectDB();

// Scheduled job for attendance report
cron.schedule('0 23 * * *', async () => {
  const User = require('./models/User');
  const sendEmail = require('./utils/sendEmail');
  try {
    const users = await User.find();
    const today = new Date().toDateString();
    const absentUsers = users.filter(user => !user.checkIns.some(check => new Date(check.date).toDateString() === today));
    for (const user of absentUsers) {
      await sendEmail(user.email, 'Attendance Enquiry', 'Why didn\'t you check in today? Please reply to this email.');
    }
  } catch (error) {
    console.error('Attendance cron error:', error);
  }
});

// Middleware
// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/checkin', require('./routes/checkin'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Rollcall Church Management System API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});