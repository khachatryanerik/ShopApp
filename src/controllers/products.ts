import { Request, Response } from "express";
import { ProductsService } from "../services/products";

export class ProductsController {
    static async getAll(req: Request, res: Response) {
        res.send(await ProductsService.getAll(req, res));
    }

    static async getByID(req: Request, res: Response) {
        res.send(await ProductsService.getByID(req, res));
    }

    static async post(req: Request, res: Response) {
        res.send(await ProductsService.post(req, res));
    }

    static async deleteByID(req: Request, res: Response) {
        res.send(await ProductsService.deleteByID(req, res));
    }

    static async updateByID(req: Request, res: Response) {
        res.send(await ProductsService.updateByID(req, res));
    }
}