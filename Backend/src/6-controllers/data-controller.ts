import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import StoreModel from "../3-models/store-model";
import StatusCode from "../3-models/status-codes";

const router = express.Router();

router.get("/category", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const category = await dataService.getAllCategory();
        response.json(category);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/store-by-category/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = +request.params.categoryId;
        const store = await dataService.getStoreByCategory(categoryId);
        response.json(store);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/store", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const store = new StoreModel(request.body);
        const addedStore = await dataService.addStore(store);
        response.status(StatusCode.Created).json(addedStore);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;
