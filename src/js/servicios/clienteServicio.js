const Cliente = require('../modelos/clienteModelo')

exports.guardaCliente = async(rut, nombre, direccion, ciudad, telefono, correo) => {
    const clienteEncontrado = await Cliente.findOne({ rut })

    if (clienteEncontrado) {
        throw Error('Cliente ya existe')
    }
    const response = await Cliente.create({
        rut,
        nombre,
        direccion,
        ciudad,
        telefono,
        correo
    })
    return response
}
