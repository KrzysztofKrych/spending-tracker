

import * as CategoriesActions  from '../actions/categories.actions';
import { Categorie } from '../modules/categorie.module';
import { TransactionType } from '../modules/transactionType';

const initialState: Categorie[] = [{
    id: "1",
    name: "ExpensetempNAme",
    type: TransactionType.EXPENSE
},
{
    id: "2",
    name: "IncometempNAme",
    type: TransactionType.INCOME
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