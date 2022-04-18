const express = require('express');
const router = express.Router();
const areasController = require('../controllers/areas.controller');

router.post('/', areasController.create);
router.get('/', areasController.find);
router.get('/:id', areasController.findOne);
router.put('/:id', areasController.update);
router.delete('/:id', areasController.remove);

module.exports = router;