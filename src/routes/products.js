import express from 'express';

import {
  getAll,
  getByName,
  getByID,
  create,
  update,
  toDelete,
} from '../controllers/products.js';
const router = express.Router();

router.get('/', getAll);
router.get('/getbyname/', getByName);
router.get('/:id', getByID);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', toDelete);

export default router;
