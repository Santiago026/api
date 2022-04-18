const Agenda = require('../models/agendas.model');

let response = {
    msg: '',
    success: false,
};

exports.create = function(req, res) {
    let agenda = new Agenda({
        asignatura: req.body.asignatura,
        docente: req.body.docente,
        fundacion: req.body.fundacion,
        fecha: req.body.fecha,
        horario: req.body.horario,
    });
    agenda.save(function(err) {
        if (err) {
            response.msg = 'Error al crear la agenda';
            response.success = false;
            res.json(response);
            return;
        }
    })
    response.msg = 'Agenda creada correctamente';
    response.success = true;
    res.json(response);
};

exports.find = function(req, res) {
    Agenda.find(function(err, agendas) {
        res.json(agendas);
    })
}

exports.findOne = function(req, res) {
    Agenda.findById({_id: req.params.id}, function(err, agenda) {
        res.json(agenda);
    })
}

exports.update = function(req, res) {
    let agenda = {
        asignatura: req.body.asignatura,
        docente: req.body.docente,
        fundacion: req.body.fundacion,
        fecha: req.body.fecha,
        horario: req.body.horario,
    }
    Agenda.findByIdAndUpdate(req.params.id, {$set: agenda}, function(err) {
        if (err) {
            console.log = false,
            response.msg = 'Error al actualizar la agenda';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Agenda actualizada correctamente';
        response.success = true;
        res.json(response);
    })
}

exports.remove = function(req, res) {
    Agenda.findByIdAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.error = false,
            response.msg = 'Error al eliminar la agenda';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Agenda eliminada correctamente';
        response.success = true;
        res.json(response);
    })
}