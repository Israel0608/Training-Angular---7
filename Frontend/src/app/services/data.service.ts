import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import CategoryModel from '../models/category-model';
import StoreModel from '../models/store-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {


    public constructor(private http: HttpClient) { }

    public async getAllCategory(): Promise<CategoryModel[]> {
        const observable = this.http.get<CategoryModel[]>(appConfig.CategoryUrl)
        const category = await firstValueFrom(observable)
        return category
    }

    public async getStoreByCategory(categoryId: number): Promise<StoreModel[]> {
        const observable = this.http.get<StoreModel[]>(appConfig.StoreByCategoryUrl + categoryId)
        const store = await firstValueFrom(observable)
        return store
    }

    public async addStore(store: StoreModel): Promise<void> {
        const observable = this.http.post<StoreModel>(appConfig.StoreUrl, store)
        await firstValueFrom(observable)
    }
}
