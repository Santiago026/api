const Docente = require('../models/docentes.model');

let response = {
    msg: '',
    success: false,
};

exports.create = function(req, res) {
    let docente = new Docente({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    });
    docente.save(function(err) {
        if (err) {
            response.success = false;
            response.msg = 'Error al crear docente';
            res.json(response);
            return;
        }
    })
    response.success = true,
    response.msg = 'Docente guardado correctamente';
    res.json(response);
};

exports.find = function(req, res) {
    Docente.find(function(err, docentes) {
        res.json(docentes);
    })
}

exports.findOne = function(req, res) {
    Docente.findById({_id: req.params.id}, function(err, docente) {
        res.json(docente);
    })
}

exports.update = function(req, res) {
    let docente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    }
    Docente.findByIdAndUpdate(req.params.id,{$set: docente}, function(err) {
        if (err) {
            console.log = false,
            response.success = false;
            response.msg = 'Error al actualizar docente';
            res.json(response);
            return;
        }
        response.success = true,
        response.msg = 'Docente actualizado correctamente';
        res.json(response);
    })
}

exports.remove = function(req, res) {
    Docente.findByIdAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.error = false,
            response.success = false;
            response.msg = 'Error al eliminar docente';
            res.json(response);
            return;
        }
        response.success = true,
        response.msg = 'Docente eliminado correctamente';
        res.json(response);
    })
}



