

import * as CategoriesActions  from '../actions/categories.actions';
import { Category} from '../modules/category.module';

const initialState: Category[] = []

const categoriesReducer = (state: Category[] = initialState, action: CategoriesActions.Actions) => {
    switch(action.type){
        case CategoriesActions.SET_CATEGORIES: {
            return [...state, ...action.payload]
        }
        case CategoriesActions.ADD_CATEGORY : {
            return [...state, {...action.payload}];
        }
        case CategoriesActions.REMOVE_CATEGORY : {
            const { id } = action.payload;
            return [...state.filter(category => category.id !== id)]
        }
        default: return state;
    }
}

export default categoriesReducer;