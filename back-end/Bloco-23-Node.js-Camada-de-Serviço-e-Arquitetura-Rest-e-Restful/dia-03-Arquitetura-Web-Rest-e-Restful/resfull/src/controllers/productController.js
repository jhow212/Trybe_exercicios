const express = require('express');
const productService = require('../service/productServices');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await productService.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);

  if (product === null)
    return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post('/add', async (req, res) => {
  const { name, brand } = req.body;

  const addProducts = await productService.add(name, brand);

  if (name === undefined || brand === undefined)
    return res.status(400).json({ message: 'Dados inválidos' });

  res.status(200).json(addProducts);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteProducts = await productService.exclude(id);

  if (deleteProducts === null)
    return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(204).json(deleteProducts);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const updateProducts = await productService.update(id, name, brand);

  res.status(202).json(updateProducts);
});

module.exports = router;
