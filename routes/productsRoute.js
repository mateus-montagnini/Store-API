const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');

router.get('/', productController.getAllProducts);
router.get('/static', productController.getAllProductsStatic);

module.exports = router;