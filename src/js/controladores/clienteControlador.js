const { response } = require('express');
const clienteServicio = require('../servicios/clienteServicio');

exports.guardaCliente = async(req, res) => {
    let { rut, nombre, direccion, ciudad, telefono, correo } = req.body;
    try {
        if (correo && rut && nombre) { // se hace validación de datos ( los requeridos)
            const response = await clienteServicio.guardaCliente(rut, nombre, direccion, ciudad, telefono, correo)
            return res.status(200).json({ data: response, message: "Cliente agregado con éxito" });
        }
        return res.status(400).send({ message: 'Ingrese los campos obligatorios' })
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}


exports.editaCliente = async(req, res) => {
    const { id } = req.params
    const { rut, nombre, direccion, ciudad, telefono, correo } = req.body
    const clientes = await clienteServicio.editaCliente(id)

    if (!clientes.data) {
        return res.status(400).json({ data: clientes.data, message: "No existe la cliente con id " + id });
    }

    const response = await clienteServicio.editaCliente(id, clientes.data, rut, nombre, direccion, ciudad, telefono, correo)

    if (!response.data) {
        return res.status(400).json({ message: response.message });
    }
    return res.status(200).send({ data: response.data, message: "cliente actualizada con éxito" })

}


exports.muestraClientes = async(req, res) => {
    try {
        const response = await clienteServicio.muestraClientes();
        if (response.length != 0) {
            return res.status(200).json({ data: response, message: "datos encontrados" });
        } else {
            return res.status(200).json({ data: response, message: "no se encontraron datos" });
        }

    } catch (e) {
        return res.status(400).json({ message: e.message });

    }
}


exports.muestraClientesId = async(req, res) => {
    const { id } = req.params;
    const response = await clienteServicio.muestraClientesId(id);
    if (!response.data) {
        return res.status(200).json({ data: response, message: 'Cliente no Existe' });
    }
    return res.status(200).json({ data: response.data, message: 'Cliente Obtenido con Éxito' });
}