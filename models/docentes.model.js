const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocentesSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellido: { type: String, required: false },
    telefono: { type: String, required: [true, 'El telefono es necesario'] },
    email: { type: String, required: [true, 'El email es necesario'] },
    direccion: { type: String, required: false },
});

module.exports = mongoose.model('Docentes', DocentesSchema);