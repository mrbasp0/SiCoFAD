const express = require('express');
const directorRouter = express.Router();

const director = require('../controllers/director.controller');

directorRouter.get('/', director.getDirectores);
directorRouter.post('/', director.createDirector);
directorRouter.get('/:id', director.getDirector);
directorRouter.put('/:id', director.editDirector);
directorRouter.delete('/:id', director.deleteDirector);

module.exports = directorRouter;