import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Categorie } from 'src/app/modules/categorie.module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [{name: "Expense"},{name: "Income"}];
  categories: Categorie[];
  constructor(private store: Store<AppState>) { 
    this.store.select('categories').subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    console.log(this.categories)
  }

  handleChangeCategoryType(name: string){
    console.log(name)
  }

}
