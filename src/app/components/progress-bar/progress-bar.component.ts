import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() income: number;
  @Input() expense: number;
  incomeWidth: number;
  expenseWidth: number;
  constructor() {}
  ngOnInit(): void {
    this.incomeWidth = (this.income / (this.income + this.expense)) * 100;
    this.expenseWidth = (this.expense / (this.income + this.expense)) * 100;
  }
}
