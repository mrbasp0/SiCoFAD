const express = require('express');
const constanciaRouter = express.Router();

const constancia = require('../controllers/constancia.controller');

constanciaRouter.get('/', constancia.getConstancias);
constanciaRouter.post('/', constancia.createConstancia);
constanciaRouter.get('/:id', constancia.getConstancia);
constanciaRouter.put('/:id', constancia.editConstancia);
constanciaRouter.delete('/:id', constancia.deleteConstancia);

module.exports = constanciaRouter;