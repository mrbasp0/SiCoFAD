const express = require('express');
const formato_5Router = express.Router();

const formato_5 = require('../controllers/formato_5.controller');

formato_5Router.get('/', formato_5.getFormatos_5);
formato_5Router.post('/', formato_5.createFormato_5);
formato_5Router.get('/:id', formato_5.getFormato_5);
formato_5Router.put('/:id', formato_5.editFormato_5);
formato_5Router.delete('/:id', formato_5.deleteFormato_5);

module.exports = formato_5Router;