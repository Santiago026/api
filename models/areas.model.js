const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreasSchema = new Schema({
    asignatura: { type: String, required: true },
    docente: { type: String, required: true }
});

module.exports = mongoose.model('Areas', AreasSchema);