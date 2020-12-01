const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    estrellas: {
        type: Number,
        required: true,
        max: 5
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = hotelSchema;
