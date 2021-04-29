const mongoose = require('mongoose')

let Schema = mongoose.Schema

let clienteSchema = new Schema({
    rut: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
    },
    ciudad: {
        type: String,
    },
    telefono: {
        type: String,
    },
    correo: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('cliente', clienteSchema)