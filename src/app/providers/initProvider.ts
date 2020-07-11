import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { spendingMiddleware } from '../middleware/spending.middleware';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class InitProvider {
    constructor(private store: Store<AppState>, private firestore: AngularFirestore){}
    middleware = new spendingMiddleware(this.firestore, this.store);
    loadSpending(){
        this.middleware.getSpending();
    }
}