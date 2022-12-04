import express from 'express';

import { checkToken } from '../middlewares/token-check.js';

const router = express.Router();
import productsRoutes from './products.js';

router.get('/', (req, res) => {
  res.send('Servidor y DB UP!!! 🚀');
});

router.use('/api/products', checkToken, productsRoutes);
//router.use('/api/prov', provRoutes);

export default router;
