const express = require('express');
const checkToken = require('../middlewares/token-check');

const router = express.Router();
const productsRoutes = require('./products');
const provRoutes = require('./proveedores');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/api/products', checkToken, productsRoutes);
router.use('/api/prov', provRoutes);

module.exports = router;
