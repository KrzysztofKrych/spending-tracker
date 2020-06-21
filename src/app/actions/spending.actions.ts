import { Action } from "@ngrx/store";

export const ADD_INCOME = "ADD_INCOME";
export const ADD_EXPENSE = "ADD_EXPENSE";

export class AddIncome implements Action {
    readonly type = ADD_INCOME;
    constructor(public payload: number) {}
}

export class AddExpense implements Action {
    readonly type = ADD_EXPENSE;
    constructor(public payload: number) {}
}

export type Actions = AddIncome | AddExpense;