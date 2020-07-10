import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  switcherOptions = [{name: "Expense"},{name: "Income"}];
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeCategoryType(name: string){
    console.log(name)
  }

}
