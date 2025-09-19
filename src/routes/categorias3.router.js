const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias3.controller');
router.get('/create', categoriasController.create);
router.get('/', categoriasController.index);
router.get('/:id', categoriasController.show);
router.post('/', categoriasController.store);
module.exports = router;