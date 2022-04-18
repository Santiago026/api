const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario: {type: String, required: true},
    pass: {type: String, required: true},
});

module.exports = mongoose.model('Usuarios', UsuarioSchema);