const express = require('express');
const formato_1Router = express.Router();

const formato_1 = require('../controllers/formato_1.controller');

formato_1Router.get('/', formato_1.getFormatos_1);
formato_1Router.post('/', formato_1.createFormato_1);
formato_1Router.get('/:id', formato_1.getFormato_1);
formato_1Router.put('/:id', formato_1.editFormato_1);
formato_1Router.delete('/:id', formato_1.deleteFormato_1);

module.exports = formato_1Router;