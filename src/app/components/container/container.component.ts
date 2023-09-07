import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResultRequest } from 'src/app/models/resultRequest';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  constructor(private productService : ProductService) {}

  products: Card[] = [];
  isDisplayModal : boolean = false;
  modalCard: Card | undefined;
  productsSub: Subscription | undefined;
  isLoading : boolean = true;



  ngOnInit() : void {
    //this.cards = this.productService.getProducts();
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (products : ResultRequest<Card>) => {
        if(products.isSuccess){
          this.products = products.results;
          this.isLoading = false;
        }
      },
      error : (error : any) => {
        console.log(error);
        this.isLoading = true;
      },
      complete : () => {
        console.log('complete');
      }
    })

    console.log(this.products);
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

}
