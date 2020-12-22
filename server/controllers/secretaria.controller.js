const secretaria = require('../models/secretaria');
const secretariaCtrl = {};

secretariaCtrl.getSecretarias = async (req, res) => {
    const secretarias = await secretaria.find();
    res.json(secretarias); 
}

secretariaCtrl.createSecretaria = async (req, res) => {
    const secret = new secretaria({
        nombres: req.body.nombres,
        codigo: req.body.codigo,
        escuela: req.body.escuela
    });
    await secret.save();
    res.json({
        'status': 'Secretaria Guardado'
    });
}

secretariaCtrl.getSecretaria = async (req, res) => {
    const secret = await secretaria.findById(req.params.id);
    res.json(secret);
}

secretariaCtrl.editSecretaria = async (req, res) => {
    const { id } = req.params;
    const nsecret = {
        nombres: req.body.nombres,
        codigo: req.body.codigo,
        escuela: req.body.grupo
    };
    await secretaria.findByIdAndUpdate(id, {$set: nsecret}, {new: true});
    res.json({status: 'Secretaria Actualizado'});
}

secretariaCtrl.deleteSecretaria = async (req, res) => {
    await secretaria.findByIdAndRemove(req.params.id);
    res.json({status: 'Secretaria Eliminado'});
}

module.exports = secretariaCtrl;