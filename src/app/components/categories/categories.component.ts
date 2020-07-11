import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/modules/category.module';
import { TransactionType } from 'src/app/modules/transactionType';
import * as CategoriesAction from "../../actions/categories.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [{name: "Expense", key: TransactionType.EXPENSE},{name: "Income", key: TransactionType.INCOME}];
  categories: Observable<Category[]>;
  actualType: TransactionType = TransactionType.EXPENSE;
  constructor(private store: Store<AppState>) { 
    this.categories = store.select('categories');
  }


  handleChangeCategoryType({name, key}: {name: string, key: TransactionType}){
    this.actualType = key;
  }
  handleAddCategory(category: Category){
    this.store.dispatch(new CategoriesAction.AddExpenseCategory(category));
  }

  ngOnInit(): void {
  }
}
