import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { spendingMiddleware } from '../middleware/spending.middleware';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriesMiddleware } from '../middleware/categories.middleware';

@Injectable()
export class InitProvider {
    constructor(private store: Store<AppState>, private firestore: AngularFirestore){}
    spendingMiddleware = new spendingMiddleware(this.firestore, this.store);
    categoriesMiddleware = new CategoriesMiddleware(this.firestore, this.store);
    loadSpending(){
        this.spendingMiddleware.getSpending();
    }
    loadCategories(){
        this.categoriesMiddleware.getCategories();
    }
}