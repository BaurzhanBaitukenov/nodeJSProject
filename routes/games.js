const express = require("express");
const router = express.Router();
const gameController = require('../controllers/gameController')


router.get('/', gameController.getAllProducts);
router.delete('/:id', gameController.destroy);
router.get('/:id', gameController.getProductID);
router.patch('/:id', gameController.update);

module.exports = router;