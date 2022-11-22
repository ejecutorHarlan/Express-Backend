const Products = require('../models/products');

// Obtener todos los productos
const getAll = (req, res) => {
  Products.find({ isDeleted: false })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

//Obtener producto por ID (pasado en url)
const getByID = (req, res) => {
  Products.findById(req.params.id)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

// Obtener producto por nombre (pasado en el body)
const getByName = (req, res) => {
  const name = {
    name: req.body.name,
  };
  Products.findOne(name)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

// Cargar un producto
const create = (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
  };

  Products.create(newProduct)
    .then((data) => res.status(201).json({ msg: 'Product added:', data }))
    .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
};

// Hacer un update en algún producto
const update = (req, res) => {
  const prodUpdate = {
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
  };
  Products.findByIdAndUpdate(req.params.id, prodUpdate)
    .then((data) => res.status(201).json({ msg: 'Product updated:', data }))
    .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
};

// Eliminar un producto (Baja lógica)
const toDelete = (req, res) => {
  const prodDelete = {
    isDeleted: true,
  };
  Products.findByIdAndUpdate(req.params.id, prodDelete)
    .then((data) => res.status(204).json({ msg: 'Product deleted:', data }))
    .catch((err) => res.status(404).json({ msg: `Error: ${err}` }));
};

module.exports = {
  getAll,
  getByID,
  getByName,
  create,
  update,
  toDelete,
};
