const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', (req, res) => res.render('register'));
router.post('/', userController.addUser);

module.exports = router;