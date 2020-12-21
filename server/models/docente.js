const mongoose = require('mongoose');
const curso = require('./curso');
const { Schema } = mongoose;

const DocenteSchema = new Schema({
    codigo: { type: String, required: true },
    nombre: { type : String, required: true },
    carga_academica: { type: [curso] }
});

module.exports = mongoose.model('Secretaria', SecretariaSchema);