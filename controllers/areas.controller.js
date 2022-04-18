const Area = require('../models/areas.model');

let response = {
    msg: '',
    success: false,
};

exports.create = function(req, res) {
    let area = new Area({
        asignatura: req.body.asignatura,
        docente: req.body.docente
    })
    area.save(function(err) {
        if (err) {
            console.log = false,
            response.msg = 'Error al crear el area';
            response.success = false;
            res.json(response);
            return;
        } 
    })
    response.success = true;
    response.msg = 'Area creada correctamente';
    res.json(response);
}

exports.find = function(req, res) {
    Area.find(function(err, areas) {
        res.json(areas);
    })
}

exports.findOne = function(req, res) {
    Area.findById({_id: req.params.id}, function(err, area) {
        res.json(area);
    })
}

exports.update = function(req, res) {
    let area = {
        asignatura: req.body.asignatura,
        docente: req.body.docente
    }
    Area.findByIdAndUpdate(req.params.id, {$set: area}, function(err) {
        if (err) {
            console.log = false,
            response.msg = 'Error al actualizar el area';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Area actualizada correctamente';
        response.success = true;
        res.json(response);
    })
}

exports.remove = function(req, res) {
    Area.findByIdAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.error = false,
            response.msg = 'Error al eliminar el area';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Area eliminada correctamente';
        response.success = true;
        res.json(response);
    })
}