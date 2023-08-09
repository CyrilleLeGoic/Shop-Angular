import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  cards: Card[] = [];
  isDisplayModal : boolean = false;
  modalCard: Card | undefined;
  productsSub: Subscription | undefined;
  isLoading : boolean = true;

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

  ngOnInit() : void {
    //this.cards = this.productService.getProducts();
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (products : Card[]) => {
        this.cards = products
        this.isLoading = false;
      },
      error : (error : any) => {
        console.log(error);
        this.isLoading = true;
      },
      complete : () => {
        console.log('complete');
      }
    })
  }
}


