const constancia = require('../models/constancia');
const constanciaCtrl = {};

constanciaCtrl.getConstancias = async (req, res) => {
    const constancias = await constancia.find();
    res.json(constancias);
}

constanciaCtrl.createConstancia = async (req, res) => {
    const cons = new constancia({
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,
        nom_docente: req.body.nom_docente,
        cod_docente: req.body.cod_docente,
        mensaje: req.body.mensaje
    });
    await cons.save();
    res.json({
        'status': 'constancia Guardado'
    });
}

constanciaCtrl.getConstancia = async (req, res) => {
    const cons = await constancia.findById(req.params.id);
    res.json(cons);
}

constanciaCtrl.editConstancia = async (req, res) => {
    const { id } = req.params;
    const ncons = {
        cod_curso: req.body.cod_curso,
        num_grupo: req.body.num_grupo,
        nom_curso: req.body.nom_curso,
        nom_docente: req.body.nom_docente,
        cod_docente: req.body.cod_docente,
        mensaje: req.body.mensaje
    };
    await constancia.findByIdAndUpdate(id, { $set: ncons }, { new: true });
    res.json({ status: 'constancia Actualizado' });
}

constanciaCtrl.deleteConstancia = async (req, res) => {
    await constancia.findByIdAndRemove(req.params.id);
    res.json({ status: 'constancia Eliminado' });
}

module.exports = constanciaCtrl;