const express = require('express');
const docenteRouter = express.Router();

const docente = require('../controllers/docente.controller');

docenteRouter.get('/', docente.getDocentes);
docenteRouter.post('/', docente.createDocente);
docenteRouter.get('/:id', docente.getDocente);
docenteRouter.put('/:id', docente.editDocente);
docenteRouter.delete('/:id', docente.deleteDocente);

module.exports = docenteRouter;