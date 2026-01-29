const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  try {
    const { idNumber } = req.body;
    if (!idNumber) return res.status(400).json({ error: 'ID Number is required' });

    const user = await User.findOne({ idNumber });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const today = new Date().toDateString();
    const alreadyChecked = user.checkIns.some(check => new Date(check.date).toDateString() === today);
    if (alreadyChecked) return res.status(400).json({ error: 'Already checked in today' });

    user.checkIns.push({ date: new Date(), status: 'present' });
    await user.save();

    // Send welcome email
    await sendEmail(user.email, 'Welcome to V-Church HQ Nairobi!', `Hello ${user.name}, you have successfully checked in for today.`);

    res.json({ message: 'Check-in successful', user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;