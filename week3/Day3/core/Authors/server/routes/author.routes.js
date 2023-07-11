const AuthorController= require('../controllers/author.controller')
module.exports=(app)=>{
    app.get("/api/Author", AuthorController.readAll);
    app.post("/api/Author", AuthorController.create);
    app.get("/api/Author/:id", AuthorController.findOneAuthor);
    app.put("/api/Author/:id", AuthorController.update);
    app.delete("/api/Author/:id", AuthorController.deleteAuthor);
}