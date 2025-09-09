const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  specialization: { type: String },
  clinicInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);