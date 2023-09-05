const express = require('express')
const router = express.Router();

const product = require('./../modules/product/product');

router.get('/',product.get)
router.get('/add',product.add)
router.get('/update',product.update)
router.get('/delete',product.delete)

module.exports = router
