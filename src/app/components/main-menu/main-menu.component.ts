import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menu = [{name: "Spending"}, {name: "Transactions"}, {name: "Categories"}, {name: "Accounts"}];
  ngOnInit(): void {
  }
  constructor(private router: Router){}
  navigate(name: string){
    this.router.navigate([`/${name.toLowerCase()}`]);
  }
}
