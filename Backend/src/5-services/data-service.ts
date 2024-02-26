import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import CategoryModel from "../3-models/category-model";
import StoreModel from "../3-models/store-model";

class DataService {

    public async getAllCategory(): Promise<CategoryModel[]> {
        const sql = "SELECT * FROM categories";
        const category = dal.execute(sql);
        return category;
    }

    public async getStoreByCategory(categoryId: number): Promise<StoreModel[]> {

        const sql = "SELECT * FROM store WHERE categoryId = ?";

        const store = await dal.execute(sql, [categoryId]);

        return store;
    }

    public async addStore(store: StoreModel): Promise<StoreModel> {

        const sql = "INSERT INTO store VALUES(DEFAULT, ?, ?, ?)";

        const info: OkPacket = await dal.execute(sql, [store.categoryId, store.storeName, store.address]);

        store.storeId = info.insertId;

        return store;
    }
}

const dataService = new DataService();

export default dataService;
