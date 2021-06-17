import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.scss'],
})
export class AddTransactionFormComponent implements OnInit {
  constructor() {}
  @Output() onClose = new EventEmitter<MouseEvent>();
  @Output() onSave = new EventEmitter<MouseEvent>();

  ngOnInit(): void {}

  handleClose() {
    this.onClose.emit();
  }
  handleSave() {
    this.onSave.emit();
  }
}
