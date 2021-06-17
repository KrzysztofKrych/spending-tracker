import { TransactionType } from './transactionType';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
}
