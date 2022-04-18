const express = require('express');
const router = express.Router();
const novedadesController = require('../controllers/novedades.controller');

router.post('/', novedadesController.create);
router.get('/', novedadesController.find);
router.get('/:id', novedadesController.findOne);
router.put('/:id', novedadesController.update);
router.delete('/:id', novedadesController.remove);

module.exports = router;