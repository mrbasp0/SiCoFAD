const formato_2 = require('../models/formato_2');
const formato_2Ctrl = {};

formato_2Ctrl.getFormatos_2 = async (req, res) => {
    const formatos_2 = await formato_2.find();
    res.json(formatos_2); 
}

formato_2Ctrl.createFormato_2 = async (req, res) => {
    const format_2 = new formato_2({
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,    
        nom_docente: req.body.nom_docente,
        delegado: req.body.delegado,
        subdelegado: req.body.subdelegado,
        fecha: req.body.fecha
    });
    await format_2.save();
    res.json({
        'status': 'Formato Guardado'
    });
}

formato_2Ctrl.getFormato_2 = async (req, res) => {
    const format_2 = await formato_2.findById(req.params.id);
    res.json(format_2);
}

formato_2Ctrl.editFormato_2 = async (req, res) => {
    const { id } = req.params;
    const nformat_2 = {
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,    
        nom_docente: req.body.nom_docente,
        delegado: req.body.delegado,
        subdelegado: req.body.subdelegado,
        fecha: req.body.fecha
    };
    await formato_2.findByIdAndUpdate(id, {$set: nformat_2}, {new: true});
    res.json({status: 'Formato Actualizado'});
}

formato_2Ctrl.deleteFormato_2 = async (req, res) => {
    await formato_2.findByIdAndRemove(req.params.id);
    res.json({status: 'Formato Eliminado'});
}

module.exports = formato_2Ctrl;