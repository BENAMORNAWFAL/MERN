const Product = require("../models/product.model")
console.log(Product);


    // READ ALL
    module.exports.readAll = (req, res) => {
        Product.find()
        .then((allProduct) =>{
            res.json(allProduct)
        })
        .catch((err) => {
            res.json({ message: 'I am in controller readall : Something went wrong', error: err })
        })
    
        
    }
    
    // CREATE
    module.exports.create = (req, res) => {
        const{title,price,description}=req.body
        Product.create({title,price,description})
        .then((Prod)=>{
            res.json({Prod})
        })
        .catch((err)=>{
            res.json({ message: "I'm in controller create : Something went wrong ", error: err });
        });
    };
    
    //READ ONE
    module.exports.findOneSingleProduct = (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => {
                res.json({ Product: oneProduct })
            })
            .catch((err) => {
                res.json({ message: 'I am in controller read one : Something went wrong', error: err })
            });}
    
    // UPDATE 
    module.exports.update = (req, res) =>{
        Product.findOneAndUpdate({_id: req.params.id}, req.body,
        {new: true, runValidators: true})
        .then((updatedProduct)=>{
            res.json({Product: updatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'I am in controller update :Something went wrong', error: err })
        });
    }
    
    // DELETE
    module.exports.deleteAnExistingProduct = (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'I am in controller delete : Something went wrong', error: err })
            });}
