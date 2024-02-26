class StoreModel {
    public storeId: number;
    public categoryId: number;
    public storeName: string;
    public address: string;

    public constructor(store: StoreModel){
        this.storeId = store.storeId;
        this.categoryId = store.categoryId;
        this.storeName = store.storeName;
        this.address = store.address;
    }
}

export default StoreModel;
