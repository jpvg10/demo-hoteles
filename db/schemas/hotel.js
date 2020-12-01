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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ciudad',
        required: true
    }
});

module.exports = hotelSchema;
