const express = require("express");
const router = express.Router()
const clienteControlador = require('../controladores/clienteControlador')


//router.get('/',ConstructoraController.getConstructoras)
router.post('/', clienteControlador.guardaCliente)
    //router.put('/:id', ConstructoraController.updateConstructora)
    //router.get('/:id', ConstructoraController.findConstructora)

module.exports = router;