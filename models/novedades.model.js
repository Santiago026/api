const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NovedadesSchema = new Schema({
    docente: { type: String, required: true },
    fundacion: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: String, required: true },
});

module.exports = mongoose.model('Novedades', NovedadesSchema);