import { Spending } from './modules/spending.module';
import { Category } from './modules/category.module';

export interface AppState {
  spending: Spending;
  categories: Category[];
}
