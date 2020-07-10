import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from "../../modules/option.module";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  @Input() options: Option[];
  @Input() selectedOptionName: string;
  @Output() onChange = new EventEmitter<string>();
  activeLabel: string;
  constructor() { };

  ngOnInit(): void {
    this.activeLabel = this.selectedOptionName;
  }

  toggleActiveLabel(name: string){
    if(this.activeLabel !== name){
      this.activeLabel = name;
      this.onChange.emit(name);
    }
  }

}
