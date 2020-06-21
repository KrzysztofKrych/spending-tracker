import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Spending } from 'src/app/modules/spending.module';
import { Store } from '@ngrx/store';
import { AddIncome } from 'src/app/actions/spending.actions';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menu = [{name: "Spending"}, {name: "Transaction"}, {name: "Categories"}, {name: "Accounts"}]
  ngOnInit(): void {
  }

}
