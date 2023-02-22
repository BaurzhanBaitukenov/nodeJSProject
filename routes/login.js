const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render('login.ejs'))

module.exports = router;