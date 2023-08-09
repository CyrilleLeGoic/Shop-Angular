import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent {

  @Input() card: Card | undefined;
  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  closeModal() {
    this.close.emit('close');
    console.log('close modal');
  }




  constructor() {}

  ngOnInit(): void {

  }



}
