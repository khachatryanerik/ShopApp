import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Product } from "../entity/Product";

export class ProductsService {
    static async getAll(req: Request, res: Response) {
        const result = await getRepository(Product)
        .createQueryBuilder("product")
        .getMany();
    
        return result;
    }

    static async getByID(req: Request, res: Response) {
        const result = await getRepository(Product)
        .createQueryBuilder("product")
        .where(`product.id = ${req.params.id}`)
        .getOne();
    
        return result;
    }

    static async post(req: Request, res: Response) {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Product)
        .values(req.body)
        .execute();
    
        return "Record has been added.";
    }

    static async deleteByID(req: Request, res: Response) {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Product)
        .where(`product.id = ${req.params.id}`)
        .execute();
    
        return "Record has been deleted.";
    }

    static async updateByID(req: Request, res: Response) {
        await getConnection()
        .createQueryBuilder()
        .update(Product)
        .set(req.body)
        .where(`product.id = ${req.params.id}`)
        .execute();
    
        return "Record has been updated.";
    }
}