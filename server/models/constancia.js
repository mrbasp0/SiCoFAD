const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConstanciaSchema = new Schema({
    cod_curso: { type: String, required: true },
    num_grupo: { type: Number, required: true },
    nom_curso: { type: String, required: true },    
    nom_docente: { type: String, required: true },
    cod_docente: { type: String, required: true },
    mensaje: { type: String, required: true },
});

module.exports = mongoose.model('Constancia', ConstanciaSchema);