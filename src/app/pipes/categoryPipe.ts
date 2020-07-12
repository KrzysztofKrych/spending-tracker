import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../modules/category.module';
import { TransactionType } from '../modules/transactionType';


@Pipe({ name: 'filterCategory' })
export class CategoryPipe implements PipeTransform {
  transform(categories: Category[], type: TransactionType) {
    return categories.filter(category => category.type === type);
  }
}