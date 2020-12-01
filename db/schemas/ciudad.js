const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    pais: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = ciudadSchema;
