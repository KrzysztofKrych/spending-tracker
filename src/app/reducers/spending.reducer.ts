
import { Action } from "@ngrx/store";
import { Spending } from '../modules/spending.module';
import * as SpendingActions  from '../actions/spending.actions';

const initialState: Spending = {
    income: 0,
    expense: 0,
    balance: 0,
    id: ""
}

const spendingReducer = (state: Spending = initialState, action: SpendingActions.Actions) => {
    switch(action.type){
        case SpendingActions.SET_SPENDING_DATA: {
            return {...state, ...action.payload};
        }
        case SpendingActions.ADD_INCOME: {
            return {
                ...state,
                income: state.income + action.payload
            };
        }
        case SpendingActions.ADD_EXPENSE: {
            return {
                ...state,
                expense: state.expense + action.payload
            };
        }
        default: return state;
    }
}

export default spendingReducer;