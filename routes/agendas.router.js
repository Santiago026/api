const express = require('express');
const router = express.Router();
const agendasController = require('../controllers/agendas.controller');

router.post('/', agendasController.create);
router.get('/', agendasController.find);
router.get('/:id', agendasController.findOne);
router.put('/:id', agendasController.update);
router.delete('/:id', agendasController.remove);

module.exports = router;