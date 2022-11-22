const express = require('express');
const checkToken = require('../middlewares/token-check');

const router = express.Router();
const productsRoutes = require('./products');

router.get('/', (req, res) => {
  res.send('Servidor y DB UP!!! 🚀');
});

router.use('/api/products', checkToken, productsRoutes);
router.use('/api/prov', provRoutes);

module.exports = router;
