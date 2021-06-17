import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('inputRef') inputReference: ElementRef;
  @Input() type: string;
  @Input() value: string | number;
  @Input() defaultAutoFocus: boolean = false;

  @Output() onChange = new EventEmitter<MouseEvent>();
  @Output() onBlur = new EventEmitter<MouseEvent>();

  constructor() {}

  handleBlur(event: MouseEvent) {
    this.onBlur.emit(event);
  }
  handleChange(event: MouseEvent) {
    this.onChange.emit(event);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.defaultAutoFocus && this.inputReference.nativeElement.focus();
  }
}
