const mongoose = require('mongoose');
const ciudadSchema = require('../schemas/ciudad');

const ciudadModel = new mongoose.model('Ciudad', ciudadSchema);

module.exports = ciudadModel;
