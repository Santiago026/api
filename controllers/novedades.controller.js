const Novedad = require('../models/novedades.model');

let response = {
    msg: '',
    success: false,
};

exports.create = function(req, res) {
    let novedad = new Novedad({
        docente: req.body.docente,
        fundacion: req.body.fundacion,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
    })
    novedad.save(function(err){
        if(err){
            response.msg = 'Error al crear la novedad';
            response.success = false;
            res.json(response);
        }
    })
    response.msg = 'Novedad creada con exito';
    response.success = true;
    res.json(response);
}

exports.find = function(req, res) {
    Novedad.find(function(err, novedades) {
        res.json(novedades);
    })
}

exports.findOne = function(req, res) {
    Novedad.findById({_id: req.params.id}, function(err, novedad) {
        res.json(novedad);
    })
}

exports.update = function(req, res) {
    let novedad = {
        docente: req.body.docente,
        fundacion: req.body.fundacion,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
    }
    Novedad.findByIdAndUpdate(req.params.id, {$set: novedad}, function(err) {
        if(err){
            console.log = false,
            response.msg = 'Error al actualizar la novedad';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Novedad actualizada con exito';
        response.success = true;
        res.json(response);
    })
}

exports.remove = function(req, res) {
    Novedad.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err){
            console.error = false,
            response.msg = 'Error al eliminar la novedad';
            response.success = false;
            res.json(response);
            return;
        }
        response.msg = 'Novedad eliminada con exito';
        response.success = true;
        res.json(response);
    })
}
