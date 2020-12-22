const usuario = require('../models/usuario');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await usuario.find();
    res.json(usuarios); 
}

usuarioCtrl.createUsuario = async (req, res) => {
    const usuar = new usuario({
        user: req.body.user,
        pass: req.body.pass,
        rol: req.body.rol
    });
    await usuar.save();
    res.json({
        'status': 'Usuario Guardado'
    });
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuar = await usuario.findById(req.params.id);
    res.json(usuar);
}

usuarioCtrl.editUsuario = async (req, res) => {
    const { id } = req.params;
    const nusuar = {
        user: req.body.user,
        pass: req.body.pass,
        rol: req.body.rol
    };
    await usuario.findByIdAndUpdate(id, {$set: nusuar}, {new: true});
    res.json({status: 'Usuario Actualizado'});
}

usuarioCtrl.deleteUsuario = async (req, res) => {
    await usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Eliminado'});
}

module.exports = usuarioCtrl;