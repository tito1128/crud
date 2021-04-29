const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crudd', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
mongoose.connection.once('open', function() {
    console.log('conexión exitosa');
}).on('error', function(error) {
    console.log("Error is:", error);
});