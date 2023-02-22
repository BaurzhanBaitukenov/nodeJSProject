const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const db = require('./config/keys.js')
const session = require('express-session')
const passport=require('passport')
const methodOverride = require('method-override')
const swaggerUi = require('swagger-ui-express')
const app = express();


/////// swagger //////
swaggerDocument = require('./swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))




/////// mongoose //////
mongoose
    .connect(db.uri)
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log(error));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(methodOverride('_method'))




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


/*app.get("/secrets", function(req, res){
    if(req.isAuthenticated()){
        res.render("secrets")
    }else{
        res.redirect("/login")
    }
});*/



/////// routes //////
app.use("/", require("./routes/root"));
app.use("/games", require("./routes/games"));
app.use("/contact", require("./routes/contact"));
app.use("/temp", require("./routes/temp"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/users", require("./routes/users"));
app.use("/product", require("./routes/product"));

module.exports = app;