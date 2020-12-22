const formato_1 = require('../models/formato_1');
const formato_1Ctrl = {};

formato_1Ctrl.getFormatos_1 = async (req, res) => {
    const formatos_1 = await formato_1.find();
    res.json(formatos_1); 
}

formato_1Ctrl.createFormato_1 = async (req, res) => {
    const format_1 = new formato_1({
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,    
        nom_docente: req.body.nom_docente,
        alumnos: req.body.alumnos,
        fecha: req.body.fecha
    });
    await format_1.save();
    res.json({
        'status': 'Formato Guardado'
    });
}

formato_1Ctrl.getFormato_1 = async (req, res) => {
    const format_1 = await formato_1.findById(req.params.id);
    res.json(format_1);
}

formato_1Ctrl.editFormato_1 = async (req, res) => {
    const { id } = req.params;
    const nformat_1 = {
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,    
        nom_docente: req.body.nom_docente,
        alumnos: req.body.alumnos,
        fecha: req.body.fecha
    };
    await formato_1.findByIdAndUpdate(id, {$set: nformat_1}, {new: true});
    res.json({status: 'Formato Actualizado'});
}

formato_1Ctrl.deleteFormato_1 = async (req, res) => {
    await formato_1.findByIdAndRemove(req.params.id);
    res.json({status: 'Formato Eliminado'});
}

module.exports = formato_1Ctrl;