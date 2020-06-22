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
  constructor(private store: Store<AppState>) { 
    this.store.select('spending').subscribe(spending => this.spending = spending )
  }

  ngOnInit(): void {
  }
  addIncome(event){
    console.log(event)
  }
  addExpense(event){
    console.log(event)
  }
}
