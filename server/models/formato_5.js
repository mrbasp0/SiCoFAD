const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoSchema = new Schema({
    teoria: { type: Boolean },
    practica: { type: Boolean },
    laboratorio: { type: Boolean }
}, { _id : false });

const DelCursoSchema = new Schema({
    0: { type: Number, required: true },
    1: { type: Number, required: true },
    2: { type: Number, required: true },
    3: { type: Number, required: true },
    4: { type: Number, required: true },
    5: { type: Number, required: true },
    6: { type: Number, required: true },
    7: { type: Number, required: true },
    8: { type: Number, required: true },
    9: { type: Number, required: true },
    10: { type: Number, required: true }
}, { _id : false });

const ObsSchema = new Schema({
    0: { type: String, required: true },
    1: { type: String, required: true },
    2: { type: String, required: true },
    3: { type: String, required: true },
    4: { type: String, required: true },
    5: { type: String, required: true },
    6: { type: String, required: true },
    7: { type: String, required: true },
    8: { type: String, required: true },
    9: { type: String, required: true }
}, { _id : false });

const Form5Schema = new Schema({
    cod_curso: { type: Number, required: true },
    num_grupo: { type: Number, required: true },
    nom_curso: { type: String, required: true },
    tipo: { type: TipoSchema },
    nom_docente: { type: String, required: true },
    email_docente: { type: String, required: true },
    telef_docente: { type: Number },
    del_curso: { type: DelCursoSchema },
    observaciones: { type: ObsSchema },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Form5', Form5Schema);