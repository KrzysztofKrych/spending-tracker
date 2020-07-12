import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Spending } from 'src/app/modules/spending.module';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent implements OnInit {
  spending: Spending;
  showForm: boolean;
  constructor(private store: Store<AppState>) {
    this.store.select('spending').subscribe(spending => this.spending = spending);
  }

  addIncome(event: MouseEvent){
    this.showForm = true;
  }
  addExpense(event: MouseEvent){
    this.showForm = true;
  }
  handleCloseForm(){
    this.showForm = false;
  }
  handleSaveForm(){
    this.showForm = false;
  }
  ngOnInit(): void {
  }
}
