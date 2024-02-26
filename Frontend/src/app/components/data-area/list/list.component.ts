import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import CategoryModel from '../../../models/category-model';
import StoreModel from '../../../models/store-model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {
  public category: CategoryModel[];
  public store: StoreModel[];

  public constructor(private dataService: DataService) { } // DI

  public async ngOnInit() {
    try {
      this.category = await this.dataService.getAllCategory();
    } catch (err: any) { alert(err.message) }
  }

  public async showStore(args: Event) {
    try {
      const select = args.target as HTMLSelectElement; // Elemnt raising the event;
      const categoryId = +select.value
      this.store = await this.dataService.getStoreByCategory(categoryId)

    } catch (err: any) { alert(err.message) }
  }
}