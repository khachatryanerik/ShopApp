import { Router } from "express";
import { ProductsController } from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/:id", ProductsController.getByID);

productsRouter.post("/", ProductsController.post);

productsRouter.delete("/:id", ProductsController.deleteByID);

productsRouter.patch("/:id", ProductsController.updateByID);

export { productsRouter };