const curso = require('../models/curso');
const cursoCtrl = {};

cursoCtrl.getCursos = async (req, res) => {
    const cursos = await curso.find();
    res.json(cursos); 
}

cursoCtrl.createCurso = async (req, res) => {
    const curs = new curso({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        grupo: req.body.grupo,
        plan: req.body.plan
    });
    await curs.save();
    res.json({
        'status': 'Curso Guardado'
    });
}

cursoCtrl.getCurso = async (req, res) => {
    const curs = await curso.findById(req.params.id);
    res.json(curs);
}

cursoCtrl.editCurso = async (req, res) => {
    const { id } = req.params;
    const ncurs = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        grupo: req.body.grupo,
        plan: req.body.plan
    };
    await curso.findByIdAndUpdate(id, {$set: ncurs}, {new: true});
    res.json({status: 'Curso Actualizado'});
}

cursoCtrl.deleteCurso = async (req, res) => {
    await curso.findByIdAndRemove(req.params.id);
    res.json({status: 'Curso Eliminado'});
}

module.exports = cursoCtrl;