const ProductModel = require('../models/product');

exports.getAllProducts = async function (req, res, next) {
    const products = await ProductModel.find();
    /*res.render('AddedProduct', {path: '/', p: products});*/
    res.json(products);

}

exports.getProductID = async function (req, res) {
    try {
        const product = await ProductModel.findOne({_id: req.params.id}).exec();
        res.status(200).json(product)
    } catch(error) {
        res.status(200).json(error);
    }

}


exports.update = async (req, res) => {
    if (!req.body.title || !req.body.imageURL || !req.body.price || !req.body.description) {
        res.status(400).render('results', {p: "Data to update can not be empty!"})
        return
    }
    const query = req.params.id;

    await ProductModel.findOneAndUpdate({_id: query}, {title:req.body.title,
            imageURL:req.body.imageURL,
            price:req.body.price,
        description:req.body.description
    }).then(data => {
        console.log(data)
        if (!data) {
            res.status(404).render('results', {p: `Product not found.`})
        }else{
            res.status(200).render('results', {p: "Product updated successfully."})
        }
    }).catch(err => {
        res.status(500).render('results', {p: err.message})
    });
};


exports.postProduct = async (req, res, next) => {
    const prod = new ProductModel({
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price,
        description: req.body.description
    });
    await prod.save()
        .then(result => {
            console.log(req.body)
            res.redirect('/');
        }).catch(err => console.log(err));
}

exports.destroy = async (req, res) => {
    let id = req.body.id
    let title = req.body.title
    await ProductModel.deleteOne({_id: id}).then(data => {
        //await UserModel.findByIdAndRemove(req.query.id).then(data => {
        //console.log(data)
        if (data.deletedCount === 0) {
            res.status(404).render('AddedProduct', {p: "Product not found"})
        } else {
            res.status(200).render('AddedProduct', {p: "Product " + title + " deleted successfully!"})
        }
    }).catch(err => {
        res.status(500).render('AddedProduct', {p: err.message})
    });


};



