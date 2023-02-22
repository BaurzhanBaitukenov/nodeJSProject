const UserModel = require("../models/user");
const passport = require("passport");
const bcrypt = require('bcrypt');

module.exports.getUsers = async (req,res)=> {
    try {
        const user = await UserModel.find();
        /*res.status(200).render('users.ejs', {mydata: user})*/
        res.json(user);
    } catch(error) {
        /*res.status(404).render('users.ejs', {mydata: error.message})*/
        res.json(user);
    }
}

module.exports.addUser = async (req,res)=> {
    if (!req.body.email && !req.body.password) {
        res.status(400).redirect('/')
    }
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
        const newUser = await new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
        })
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/");
            }
        });
    })
};
