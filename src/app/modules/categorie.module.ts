import { TransactionType } from './transactionType';

export interface Categorie {
    id: string;
    name: string;
    type: TransactionType;
}