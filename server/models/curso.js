const mongoose = require('mongoose');
const { Schema } = mongoose;

const CursoSchema = new Schema({
    nombres: { type : String, required: true },
    codigo: { type: String, required: true },
    grupo: { type: Number, required: true }
});

module.exports = mongoose.model('Curso', CursoSchema);