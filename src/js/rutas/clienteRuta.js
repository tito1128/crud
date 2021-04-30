const express = require("express");
const router = express.Router()
const clienteControlador = require('../controladores/clienteControlador')


// ruta para insertar clientes
router.post('/cliente', clienteControlador.guardaCliente);

// ruta para mostrar todos los clientes
router.get('/reporteCliente', clienteControlador.muestraClientes);

// Ruta para buscar o mostrar un cliente en especifico
router.get('/buscaclienteId/:id', clienteControlador.muestraClientesId);


// Ruta para actualizar Cliente
router.put('/actualizaCliente/:id', clienteControlador.editaCliente);

router.get('/ping', (request, response) => response.send('pong'));

//router.put('/:id', ConstructoraController.updateConstructora)
//router.get('/:id', ConstructoraController.findConstructora)

module.exports = router;