const express = require('express')
const app = express()
const config = require('../../config/config')

const bodyParser = require('body-parser')
const morgan = require("morgan");
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan("dev"));
app.use(cors())

const { mongoose } = require("./bd/conexion");

app.use(require("./rutas/clienteRuta.js"));

app.listen(config.port, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})