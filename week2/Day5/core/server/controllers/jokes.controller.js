const Joke = require('../models/jokes.model');
 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ Jokes: allDaJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleJokes = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ Joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewJokes = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ Joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingJokes = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ Joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingJokes = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
