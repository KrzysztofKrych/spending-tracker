import { Action } from "@ngrx/store";
import { TransactionType } from '../modules/transactionType';
import { Category } from '../modules/category.module';

export const SET_CATEGORIES = "SET_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";


export class setCategories implements Action {
    readonly type = SET_CATEGORIES;
    constructor(public payload: Category[]) {}
}

export class AddCategory implements Action {
    readonly type = ADD_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}

export class RemoveCategory implements Action {
    readonly type = REMOVE_CATEGORY;
    constructor(public payload: {id: string, type: TransactionType}) {}
}


export type Actions = AddCategory | RemoveCategory | setCategories;