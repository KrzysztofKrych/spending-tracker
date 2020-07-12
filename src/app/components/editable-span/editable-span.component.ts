import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-span',
  templateUrl: './editable-span.component.html',
  styleUrls: ['./editable-span.component.scss']
})
export class EditableSpanComponent implements OnInit {

  @Input() value: string;

  @Output() onBlur = new EventEmitter<MouseEvent>();

  isEdit: boolean = false;
  constructor() { }

  handleShowInput(){
    this.isEdit = true;
  }
  handleHideInput($event: MouseEvent){
    this.isEdit = false;
    this.onBlur.emit($event)
  }
  ngOnInit(): void {
  }

}
