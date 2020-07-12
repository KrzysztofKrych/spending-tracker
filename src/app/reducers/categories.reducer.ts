

import * as CategoriesActions  from '../actions/categories.actions';
import { Category} from '../modules/category.module';

const initialState: Category[] = []

const categoriesReducer = (state: Category[] = initialState, action: CategoriesActions.Actions) => {
    switch(action.type){
        case CategoriesActions.SET_CATEGORIES: {
            return [...state, ...action.payload]
        }
        case CategoriesActions.ADD_INCOME_CATEGORY : {
            console.log(action)
            return [...state, {...action.payload}];
        }
        case CategoriesActions.ADD_EXPENSE_CATEGORY : {
            console.log(action)
            return [...state, {...action.payload}];
        }
        case CategoriesActions.REMOVE_INCOME_CATEGORY : {
            console.log(action)
            return state;
        }
        case CategoriesActions.REMOVE_EXPENSE_CATEGORY : {
            console.log(action)
            return state;
        }
        default: return state;
    }
}

export default categoriesReducer;