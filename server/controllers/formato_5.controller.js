const formato_5 = require('../models/formato_5');
const formato_5Ctrl = {};

formato_5Ctrl.getFormatos_5 = async (req, res) => {
    const formatos_5 = await formato_5.find();
    res.json(formatos_5); 
}

formato_5Ctrl.createFormato_5 = async (req, res) => {
    const format_5 = new formato_5({
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,
        tipo: req.body.tipo,
        nom_docente: req.body.nom_docente,
        email_docente: req.body.email_docente,
        telef_docente: req.body.telef_docente,
        del_curso: req.body.del_curso,
        observaciones: req.body.observaciones,
        fecha: req.body.fecha
    });
    await format_5.save();
    res.json({
        'status': 'Formato Guardado'
    });
}

formato_5Ctrl.getFormato_5 = async (req, res) => {
    const format_5 = await formato_5.findById(req.params.id);
    res.json(format_5);
}

formato_5Ctrl.editFormato_5 = async (req, res) => {
    const { id } = req.params;
    const nformat_5 = {
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,
        tipo: req.body.tipo,
        nom_docente: req.body.nom_docente,
        email_docente: req.body.email_docente,
        telef_docente: req.body.telef_docente,
        del_curso: req.body.del_curso,
        observaciones: req.body.observaciones,
        fecha: req.body.fecha
    };
    await formato_5.findByIdAndUpdate(id, {$set: nformat_5}, {new: true});
    res.json({status: 'Formato Actualizado'});
}

formato_5Ctrl.deleteFormato_5 = async (req, res) => {
    await formato_5.findByIdAndRemove(req.params.id);
    res.json({status: 'Formato Eliminado'});
}

module.exports = formato_5Ctrl;