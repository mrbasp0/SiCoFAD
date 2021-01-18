const express = require('express');
const cursoRouter = express.Router();

const curso = require('../controllers/curso.controller');

cursoRouter.get('/', curso.getCursos);
cursoRouter.post('/', curso.createCurso);
cursoRouter.get('/:id', curso.getCurso);
cursoRouter.put('/:id', curso.editCurso);
cursoRouter.delete('/:id', curso.deleteCurso);

module.exports = cursoRouter;