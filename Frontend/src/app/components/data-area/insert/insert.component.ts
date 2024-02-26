import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import StoreModel from '../../../models/store-model';
import CategoryModel from '../../../models/category-model';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {

  public store = new StoreModel();
  public category: CategoryModel[];


  public constructor(private dataService: DataService, private router: Router) { } // DI
  public async ngOnInit() {
    try {
      this.category = await this.dataService.getAllCategory();
    } catch (err: any) { alert(err.message) }
  }

  public async send() {
    try {
      await this.dataService.addStore(this.store);
      alert("Store has been added.")
      this.router.navigateByUrl("/list")

    } catch (err: any) {
      alert(err.message)
    }
  }
}
