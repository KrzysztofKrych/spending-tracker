import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Categorie } from 'src/app/modules/categorie.module';
import { TransactionType } from 'src/app/modules/transactionType';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [{name: "Expense", key: TransactionType.EXPENSE},{name: "Income", key: TransactionType.INCOME}];
  categories: Categorie[];
  filtredCategories: Categorie[];
  constructor(private store: Store<AppState>) { 
    this.store.select('categories').subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.filtredCategories = this.categories.filter(categorie => categorie.type === TransactionType.EXPENSE);
  }

  handleChangeCategoryType({name, key}: {name: string, key: TransactionType}){
    this.filtredCategories = this.categories.filter(categorie => categorie.type === key);
    console.log(name, key)
  }

}
