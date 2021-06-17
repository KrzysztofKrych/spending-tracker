import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/modules/category.module';
import { TransactionType } from 'src/app/modules/transactionType';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { CategoriesMiddleware } from 'src/app/middleware/categories.middleware';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [
    { name: 'Expense', key: TransactionType.EXPENSE },
    { name: 'Income', key: TransactionType.INCOME },
  ];
  categories: Observable<Category[]>;
  actualType: TransactionType = TransactionType.EXPENSE;
  categoriesMiddleware = new CategoriesMiddleware(this.firestore, this.store);
  isModalOpen: boolean = false;
  constructor(
    private store: Store<AppState>,
    private modalService: ModalService,
    private firestore: AngularFirestore
  ) {
    this.categories = store.select('categories');
  }

  handleChangeCategoryType({
    name,
    key,
  }: {
    name: string;
    key: TransactionType;
  }) {
    this.actualType = key;
  }

  handleAddCategory({ event, name }: { event: MouseEvent; name: string }) {
    const category = {
      name,
      id: String(Date.now()),
      type: this.actualType,
    };
    this.categoriesMiddleware.addCategory(category);
  }

  handleRemoveCategory(category: Category) {
    this.categoriesMiddleware.removeCategory(category);
  }

  handleChangeCategoryName(event: MouseEvent) {
    const element = event.currentTarget as HTMLInputElement;
  }

  handleShowModal(id: string) {
    this.modalService.open(id);
    this.isModalOpen = true;
  }

  handleHideModal(id: string) {
    this.modalService.close(id);
    this.isModalOpen = false;
  }

  ngOnInit(): void {}
}
