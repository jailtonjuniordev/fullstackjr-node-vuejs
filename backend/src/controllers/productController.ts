import {Request, Response} from "express";
import ProductService from "../services/productService";

export default class ProductController {
    async createProduct(req: Request, res: Response) {
        const {name, price, stock} = req.body;
        try {
            const product = await new ProductService().createProduct({name, price, stock});
            res.status(201).json(product);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({message: "Failed to create product", error: err.message});
        }
    }

    async listAllProducts(req: Request, res: Response) {
        try {
            const products = await new ProductService().listAllProducts();
            res.status(200).json(products);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({message: "Failed to list products", error: err.message});
        }
    }

    async listProductById(req: Request, res: Response) {

        const {id} = req.params;

        try {
            const product = await new ProductService().listProductById(id);
            res.status(200).json(product);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({message: "Failed to list product", error: err.message});
        }
    }

    async editProduct(req: Request, res: Response) {

        const {id} = req.params;
        const {name, price, stock} = req.body

        try {
            const product = await new ProductService().editProduct({name, price, stock}, id);
            res.status(202).json(product);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({message: "Failed to edit product", error: err.message});
        }
    }

    async deleteProduct(req: Request, res: Response) {

        const {id} = req.params;

        try {
            const product = await new ProductService().deleteProduct(id);
            res.status(410).json(product);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({message: "Failed to delete product", error: err.message});
        }
    }

}
