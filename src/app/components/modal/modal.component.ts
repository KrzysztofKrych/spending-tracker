import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  @Output() onClose = new EventEmitter<MouseEvent>();
  private element: any;
  private rootElement: any;
  constructor(private modalService: ModalService, private nativeElement: ElementRef) { 
    this.element = nativeElement.nativeElement;
    this.rootElement = document.querySelector('.root');
  }

  ngOnInit(): void {
    if (!this.id) return;
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'flex';
    this.rootElement.style.filter = 'blur(2px) grayscale(50%)';
  }

  close(): void {
    this.element.style.display = 'none';
    this.rootElement.style.filter = 'none';
  }

  handleClose(event: MouseEvent){
    this.onClose.emit(event);
  }
}
