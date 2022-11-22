const router = require('express').Router();
const products = require('../controllers/products');

router.get('/', products.getAll);
router.get('/getbyname/', products.getByName);
router.get('/:id', products.getByID);
router.post('/', products.create);
router.put('/:id', products.update);
router.delete('/:id', products.toDelete);

module.exports = router;
