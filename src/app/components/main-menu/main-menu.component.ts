import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menu = [{name: "Spending"}, {name: "Transaction"}, {name: "Categories"}, {name: "Accounts"}];
  ngOnInit(): void {
  }

}
