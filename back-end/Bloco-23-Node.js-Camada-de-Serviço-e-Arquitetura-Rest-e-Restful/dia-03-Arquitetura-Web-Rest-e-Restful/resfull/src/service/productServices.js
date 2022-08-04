const express = require('express');
const productModel = require('../models/productModels');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  return product;
};

const add = async (name, brand) => {
  const product = await productModel.add(name, brand);

  return product;
};

const exclude = async (id) => {
  const product = await productModel.exclude(id);

  return product;
};

const update = async (id, name, brand) => {
  const product = await productModel.update(id, name, brand);

  return product;
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update,
};
