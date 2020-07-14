import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/modules/category.module';
import { TransactionType } from 'src/app/modules/transactionType';
import * as CategoriesAction from "../../actions/categories.actions";
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [{name: "Expense", key: TransactionType.EXPENSE},{name: "Income", key: TransactionType.INCOME}];
  categories: Observable<Category[]>;
  actualType: TransactionType = TransactionType.EXPENSE;
  constructor(private store: Store<AppState>, private modalService: ModalService) { 
    this.categories = store.select('categories');
  }

  handleChangeCategoryType({name, key}: {name: string, key: TransactionType}){
    this.actualType = key;
  }

  handleAddCategory({event, name}: {event: MouseEvent, name: string}){
    const category = {
      name,
      id: String(Date.now()),
      type: this.actualType
    }
    this.store.dispatch(new CategoriesAction.AddExpenseCategory(category));
  }
  
  handleChangeCategoryName(event: MouseEvent){
    const element = event.currentTarget as HTMLInputElement;
  }

  handleShowModal(id: string){
    this.modalService.open(id);
  }

  handleHideModal(id: string){
    this.modalService.close(id);
  }

  ngOnInit(): void {
  }
}
