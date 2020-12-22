const docente = require('../models/docente');
const docenteCtrl = {};

docenteCtrl.getDocentes = async (req, res) => {
    const docentes = await docente.find();
    res.json(docentes); 
}

docenteCtrl.createDocente = async (req, res) => {
    const docent = new docente({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        carga_academica: req.body.carga_academica
    });
    await docent.save();
    res.json({
        'status': 'Docente Guardado'
    });
}

docenteCtrl.getDocente = async (req, res) => {
    const docent = await docente.findById(req.params.id);
    res.json(docent);
}

docenteCtrl.editDocente = async (req, res) => {
    const { id } = req.params;
    const ndocent = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        carga_academica: req.body.carga_academica
    };
    await docente.findByIdAndUpdate(id, {$set: ndocent}, {new: true});
    res.json({status: 'Docente Actualizado'});
}

docenteCtrl.deleteDocente = async (req, res) => {
    await docente.findByIdAndRemove(req.params.id);
    res.json({status: 'Docente Eliminado'});
}

module.exports = docenteCtrl;