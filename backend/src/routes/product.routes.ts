import {Router} from "express";
import ProductController from "../controllers/productController";

const productRoutes = Router();

productRoutes.post("/new", new ProductController().createProduct);
productRoutes.get("/view", new ProductController().listAllProducts);
productRoutes.get("/view/:id", new ProductController().listProductById);
productRoutes.put("/edit/:id", new ProductController().editProduct);
productRoutes.delete("/del/:id", new ProductController().deleteProduct);

export default productRoutes;
