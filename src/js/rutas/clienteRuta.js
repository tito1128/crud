const express = require("express");
const router = express.Router()
const clienteControlador = require('../controladores/clienteControlador')


//router.get('/',ConstructoraController.getConstructoras)
router.post('/cliente', clienteControlador.guardaCliente)
router.get('/ping', (request, response) => response.send('pong'));

    //router.put('/:id', ConstructoraController.updateConstructora)
    //router.get('/:id', ConstructoraController.findConstructora)

module.exports = router;
