const express = require('express');
const usuarioRouter = express.Router();

const usuario = require('../controllers/usuario.controller');

usuarioRouter.get('/', usuario.getUsuarios);
usuarioRouter.post('/', usuario.createUsuario);
usuarioRouter.get('/:id', usuario.getUsuario);
usuarioRouter.put('/:id', usuario.editUsuario);
usuarioRouter.delete('/:id', usuario.deleteUsuario);

module.exports = usuarioRouter;