const director = require('../models/director');
const directorCtrl = {};

directorCtrl.getDirectores = async (req, res) => {
    const directores = await director.find();
    res.json(directores); 
}

directorCtrl.createDirector = async (req, res) => {
    const direct = new director({
        nombres: req.body.nombres,
        codigo: req.body.codigo,
        escuela: req.body.escuela
    });
    await direct.save();
    res.json({
        'status': 'Director Guardado'
    });
}

directorCtrl.getDirector = async (req, res) => {
    const direct = await director.findById(req.params.id);
    res.json(direct);
}

directorCtrl.editDirector = async (req, res) => {
    const { id } = req.params;
    const ndirect = {
        nombres: req.body.nombres,
        codigo: req.body.codigo,
        escuela: req.body.grupo
    };
    await director.findByIdAndUpdate(id, {$set: ndirect}, {new: true});
    res.json({status: 'Director Actualizado'});
}

directorCtrl.deleteDirector = async (req, res) => {
    await director.findByIdAndRemove(req.params.id);
    res.json({status: 'Director Eliminado'});
}

module.exports = directorCtrl;