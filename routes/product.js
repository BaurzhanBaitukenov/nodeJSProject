const express = require("express");
const router = express.Router();
const controller = require('../controllers/gameController')
router
    .route("/")
    .get((req, res) => res.render('product.ejs'))
    .post(controller.postProduct)
    .delete(controller.destroy)
module.exports = router;