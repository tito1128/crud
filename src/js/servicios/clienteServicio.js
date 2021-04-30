const { Mongoose } = require('mongoose');
const Cliente = require('../modelos/clienteModelo')


exports.muestraClientes = async() => {
    try {
        const response = await Cliente.find();
        return response;
    } catch (e) {
        throw Error("Error al Consultar");
    }
}

exports.muestraClientesId = async id => {
    try {
        const response = await Cliente.findById(id);
        if (response != '' || response != null) {
            return ({ data: response, message: 'Datos Encontrados' });
        } else {
            return ({ data: null, message: 'Cliente no Existe' });
        }
    } catch (e) {
        if (e instanceof Mongoose.Error.CastError) {
            return ({ data: null, message: 'Id no valido' });
        }
        throw Error("Error al Consultar");
    }
}

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


exports.editaCliente = async(id, clientes, rut, nombre, direccion, ciudad, telefono, correo) => {
    try {
        const newCliente = {
            rut: rut ? rut : clientes.rut,
            nombre: nombre ? nombre : clientes.nombre,
            giro: giro ? giro : clientes.giro,
            direccion: direccion ? direccion : clientes.direccion,
            ciudad: ciudad ? ciudad : clientes.ciudad,
            comuna: comuna ? comuna : clientes.comuna,
            region: region ? region : clientes.region,
            telefono: telefono ? telefono : clientes.telefono,
            correo: correo ? correo : clientes.correo,
        }
        const response = await clientes.findByIdAndUpdate(id, {...newCliente }, { new: true, runValidators: true })
        return ({ data: response });
    } catch (error) {
        return ({ data: null, message: error.message });
    }
}