import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() card : Card | undefined;
  @Output() productClicked: EventEmitter<Card> = new EventEmitter();
  @Output() displayProductViewModal: EventEmitter<Card> = new EventEmitter();

  handleClickProduct(card: Card | undefined) {

    this.displayProductViewModal.emit(card);
  }



  constructor() { }







  ngOnInit(): void {}

}
