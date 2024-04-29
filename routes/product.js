const express = require('express')
const productController = require('../Controllers/product')
const router = express.Router()

router.get('/', productController.getAllProduct)
    .get('/:id', productController.getProduct)
    .post('/', productController.createProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.routes = router;

