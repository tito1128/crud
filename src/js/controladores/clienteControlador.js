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
