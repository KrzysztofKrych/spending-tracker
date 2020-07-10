

import * as CategoriesActions  from '../actions/categories.actions';
import { Categorie } from '../modules/categorie.module';
import { TransactionType } from '../modules/transactionType';

const initialState: Categorie[] = [{
    id: "1",
    name: "testName",
    type: TransactionType.EXPENSE
}]

const categoriesReducer = (state: Categorie[] = initialState, action: CategoriesActions.Actions) => {
    switch(action.type){
        case CategoriesActions.ADD_INCOME_CATEGORIE : {
            console.log(action)
            return state;
        }
        case CategoriesActions.ADD_EXPENSE_CATEGORIE : {
            console.log(action)
            return state;
        }
        case CategoriesActions.REMOVE_INCOME_CATEGORIE : {
            console.log(action)
            return state;
        }
        case CategoriesActions.REMOVE_EXPENSE_CATEGORIE : {
            console.log(action)
            return state;
        }
        default: return state;
    }
}

export default categoriesReducer;