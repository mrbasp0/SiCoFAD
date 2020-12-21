const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    user: { type : String, required: true },
    pass: { type: String, required: true },
    rol: {type: Number, required: true }   
});

module.exports = mongoose.model('Usuario', UsuarioSchema);