const express = require('express');
const secretariaRouter = express.Router();

const secretaria = require('../controllers/secretaria.controller');

secretariaRouter.get('/', secretaria.getSecretarias);
secretariaRouter.post('/', secretaria.createSecretaria);
secretariaRouter.get('/:id', secretaria.getSecretaria);
secretariaRouter.put('/:id', secretaria.editSecretaria);
secretariaRouter.delete('/:id', secretaria.deleteSecretaria);

module.exports = secretariaRouter;