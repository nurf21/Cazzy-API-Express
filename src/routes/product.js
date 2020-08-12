// Import express
const router = require('express').Router()

// Import object dari controller
const {getAllProduct, getProductById, postProduct, patchProduct, deleteProduct} = require('../controller/product')

// [GET]
router.get('/', getAllProduct)
router.get('/:id', getProductById)

// [POST]
router.post('/', postProduct)

// [PATCH]
router.patch('/:id', patchProduct)

// [DELETE]
router.delete('/:id', deleteProduct)

module.exports = router