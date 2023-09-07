import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from 'src/app/models/resultRequest';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {


  @Input() products : Card[] =[]
  isDisplayModal : boolean = false;
  modalCard: Card | undefined;
  productsSub: Subscription | undefined;
  @Input() isLoading : boolean = true;

  handleCloseModal() {
    this.isDisplayModal = false;
  }

  handleDisplayProductViewModal(card: Card | undefined) {
    this.modalCard = card;
    this.isDisplayModal = true;
  }

  constructor(private productService : ProductService) {}

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  ngOnInit() : void {}
}


