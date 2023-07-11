const Author = require("../models/author.model")



    // !===================READ ALL

    module.exports.readAll = (req, res) => {
        Author.find()
        .then((allAuthor) =>{
            res.json(allAuthor)
        })
        .catch((err) => {
            res.json({ message: 'I am in controller readall : Something went wrong', error: err })
        })
    
        
    }
    
    // !===========================CREATE

    module.exports.create = (req, res) => {
        const{name}=req.body
        Author.create({name})
        .then((Prod)=>{
            res.json({Prod})
        })
        .catch( err => {res.status(400).json(err)});
        
    };
    

    //!==============================READ ONE

    module.exports.findOneAuthor = (req, res) => {
        Author.findOne({ _id:req.params.id })
            .then(oneAuthor => {res.json( oneAuthor )
            })
            .catch((err) => {
                res.json({ message: 'I am in controller read one : Something went wrong', error: err })
            });}
    
    // !===============================UPDATE 

    module.exports.update = (req, res) =>{
        Author.findOneAndUpdate({_id: req.params.id}, req.body,
        {new: true, runValidators: true})
        .then((updatedAuthor)=>{
            res.json(updatedAuthor)
        })
        .catch( err => {res.status(400).json(err)});
    }
    
    // !==============================DELETE

    module.exports.deleteAuthor = (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleteconfirmation => {
                res.json(deleteconfirmation)
            })
            .catch((err) => {
                res.json({ message: 'I am in controller delete : Something went wrong', error: err })
            });}
