import { Action } from "@ngrx/store";
import { TransactionType } from '../modules/transactionType';
import { Category} from '../modules/category.module';

export const SET_CATEGORIES = "SET_CATEGORIES";
export const ADD_INCOME_CATEGORY = "ADD_INCOME_CATEGORIE";
export const ADD_EXPENSE_CATEGORY = "ADD_EXPENSE_CATEGORIE";
export const REMOVE_INCOME_CATEGORY = "REMOVE_INCOME_CATEGORIE";
export const REMOVE_EXPENSE_CATEGORY = "REMOVE_EXPENSE_CATEGORIE";


export class setCategories implements Action {
    readonly type = SET_CATEGORIES;
    constructor(public payload: Category[]) {}
}


export class AddIncomeCategory implements Action {
    readonly type = ADD_INCOME_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class AddExpenseCategory implements Action {
    readonly type = ADD_EXPENSE_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class RemoveIncomeCategory implements Action {
    readonly type = REMOVE_INCOME_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class RemoveExpenseCategory implements Action {
    readonly type = REMOVE_EXPENSE_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export type Actions = AddIncomeCategory | AddExpenseCategory | RemoveIncomeCategory | RemoveExpenseCategory | setCategories;