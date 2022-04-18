const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendasSchema = new Schema({
    asignatura: { type: String, required: true },
    docente: { type: String, required: true },
    fundacion: { type: String, required: true },
    fecha: { type: String, required: true },
    horario: { type: String, required: true },
});

module.exports = mongoose.model('Agendas', AgendasSchema);