const express = require('express');
const formato_2Router = express.Router();

const formato_2 = require('../controllers/formato_2.controller');

formato_2Router.get('/', formato_2.getFormatos_2);
formato_2Router.post('/', formato_2.createFormato_2);
formato_2Router.get('/:id', formato_2.getFormato_2);
formato_2Router.put('/:id', formato_2.editFormato_2);
formato_2Router.delete('/:id', formato_2.deleteFormato_2);

module.exports = formato_2Router;