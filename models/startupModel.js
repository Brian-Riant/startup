// models/startupModel.js
const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  name: String,
  industry: String,
  foundedYear: Number,
  founders: [String]
});

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;
