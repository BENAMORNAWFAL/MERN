const ProductController= require('../controllers/product.controller')
module.exports=(app)=>{
    app.get("/api/product", ProductController.readAll);
    app.post("/api/product", ProductController.create);
    app.get("/api/product/:id", ProductController.findOneSingleProduct);
    app.put("/api/product/:id", ProductController.update);
    app.delete("/api/product/:id", ProductController.deleteAnExistingProduct);
}