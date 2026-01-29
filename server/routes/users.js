const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');
const auth = require('../middleware/auth');
const upload = multer({ dest: 'uploads/' });

// POST /api/users - Create a new user
router.post('/', upload.single('passportPhoto'), async (req, res) => {
  try {
    const { idNumber, name, gender, residence, phone, email } = req.body;
    const passportPhoto = req.file ? req.file.path : null;

    // Basic validation
    if (!idNumber || !name || !gender || !residence || !phone || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = new User({ idNumber, passportPhoto, name, gender, residence, phone, email });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'ID Number or Email already exists' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
});

// GET /api/users - Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;