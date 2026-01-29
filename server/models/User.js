const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  idNumber: { type: String, required: true, unique: true },
  passportPhoto: { type: String }, // path to uploaded file
  name: { type: String, required: true },
  gender: { type: String, required: true },
  residence: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  checkIns: [{
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'present' }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);