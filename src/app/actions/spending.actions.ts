import { Action } from "@ngrx/store";
import { Spending } from '../modules/spending.module';

export const SET_SPENDING_DATA = "SET_SPENDING_DATA";
export const ADD_INCOME = "ADD_INCOME";
export const ADD_EXPENSE = "ADD_EXPENSE";



export class setSpendingData implements Action {
    readonly type = SET_SPENDING_DATA;
    constructor(public payload: Spending) {}
}


export class AddIncome implements Action {
    readonly type = ADD_INCOME;
    constructor(public payload: number) {}
}

export class AddExpense implements Action {
    readonly type = ADD_EXPENSE;
    constructor(public payload: number) {}
}

export type Actions = AddIncome | AddExpense | setSpendingData;