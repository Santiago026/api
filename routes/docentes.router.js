const exspress = require('express');
const router = exspress.Router();
const docentesController = require('../controllers/docentes.controller');

router.post('/', docentesController.create);
router.get('/', docentesController.find);
router.get('/:id', docentesController.findOne);
router.put('/:id', docentesController.update);
router.delete('/:id', docentesController.remove);

module.exports = router;