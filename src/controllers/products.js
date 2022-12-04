import Products from '../models/products.js';

// Obtener todos los productos
export const getAll = (req, res) => {
  Products.find({ isDeleted: false })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

//Obtener producto por ID (pasado en url)
export const getByID = (req, res) => {
  Products.findById(req.params.id)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

// Obtener producto por nombre (pasado en el body)
export const getByName = (req, res) => {
  const name = {
    name: req.body.name,
  };
  Products.findOne(name)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

// Cargar un producto
export const create = (req, res) => {
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
export const update = (req, res) => {
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
export const toDelete = (req, res) => {
  const prodDelete = {
    isDeleted: true,
  };
  Products.findByIdAndUpdate(req.params.id, prodDelete)
    .then((data) => res.status(204).json({ msg: 'Product deleted:', data }))
    .catch((err) => res.status(404).json({ msg: `Error: ${err}` }));
};
