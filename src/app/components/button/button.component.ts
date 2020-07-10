import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() iconLeft: string;
  @Input() className: string = "";
  @Output() btnClickEmt = new EventEmitter<MouseEvent>();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClickButton(event: MouseEvent){
    this.btnClickEmt.emit(event);
  }
}
