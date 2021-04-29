const cliente = require('../modelos/clienteModelo')
const mongoose = require('mongoose')

exports.guardaCliente = async(rut, nombre, direccion, ciudad, telefono, correo) => {
    const cliente = await cliente.findOne({ rut })
    if (cliente) {
        throw Error('Cliente ya existe')
    }

    const response = await cliente.create({
        rut,
        nombre,
        direccion,
        ciudad,
        telefono,
        correo
    })
    return response
}