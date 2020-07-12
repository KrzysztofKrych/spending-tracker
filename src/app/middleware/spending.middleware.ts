import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AngularFirestore } from '@angular/fire/firestore';
import { SpendingRepository } from '../repositories/SpendingRepository';
import * as SpendingActions  from '../actions/spending.actions';
import { Spending } from '../modules/spending.module';

export class spendingMiddleware {
    constructor(private firestore: AngularFirestore, private store: Store<AppState>) {};
    private repository = new SpendingRepository(this.firestore);
    async getSpending(){
        const spending = await this.repository.getSpending().then(res => res);
        if(spending){
            this.store.dispatch(new SpendingActions.setSpendingData(spending[0] as Spending))
        }
    }
}