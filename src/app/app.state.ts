import { Spending } from './modules/spending.module';
import { Categorie } from './modules/categorie.module';

export interface AppState {
    spending: Spending;
    categories: Categorie[];
}