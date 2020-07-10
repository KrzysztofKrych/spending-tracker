import { Action } from "@ngrx/store";
import { TransactionType } from '../modules/transactionType';

export const ADD_INCOME_CATEGORIE = "ADD_INCOME_CATEGORIE";
export const ADD_EXPENSE_CATEGORIE = "ADD_EXPENSE_CATEGORIE";
export const REMOVE_INCOME_CATEGORIE = "REMOVE_INCOME_CATEGORIE";
export const REMOVE_EXPENSE_CATEGORIE = "REMOVE_EXPENSE_CATEGORIE";

export class AddIncomeCategorie implements Action {
    readonly type = ADD_INCOME_CATEGORIE;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class AddExpenseCategorie implements Action {
    readonly type = ADD_EXPENSE_CATEGORIE;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class RemoveIncomeCategorie implements Action {
    readonly type = REMOVE_INCOME_CATEGORIE;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class RemoveExpenseCategorie implements Action {
    readonly type = REMOVE_EXPENSE_CATEGORIE;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export type Actions = AddIncomeCategorie | AddExpenseCategorie | RemoveIncomeCategorie | RemoveExpenseCategorie;