import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  @Input() type: string;
  @Output() onClose = new EventEmitter<MouseEvent>();
  @Output() onSave = new EventEmitter<{ event: MouseEvent; name: string }>();
  newCategoryName: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleSave(event: MouseEvent) {
    this.onSave.emit({ event, name: this.newCategoryName });
    this.handleClose(event);
  }

  handleClose(event: MouseEvent) {
    this.newCategoryName = '';
    this.onClose.emit(event);
  }
  setNewCategoryName(name: string) {
    this.newCategoryName = name;
  }
}
