import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AngularFirestore } from '@angular/fire/firestore';
import * as CategoriesActions  from '../actions/categories.actions';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { Category} from '../modules/category.module';

export class CategoriesMiddleware {
    constructor(private firestore: AngularFirestore, private store: Store<AppState>) {};
    private repository = new CategoriesRepository(this.firestore);
    async getCategories(){
        const categories = await this.repository.getCategories().then(res => res);
        if(categories){
            this.store.dispatch(new CategoriesActions.setCategories(categories as Category[]))
        }
    }
}