import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {

  items = ["HOME", "PRODUCTS", "SIGNIN", "SIGNUP" ]

  data : Number | undefined
  dataSub : Subscription | undefined
  interv : Number | undefined
  intervSub : Subscription | undefined

  constructor(
    private productService : ProductService
  ) {}

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
    this.intervSub?.unsubscribe();
  }

  ngOnInit(): void {
   /* this.dataSub = this.productService.getNumber().subscribe({
      next: (value : Number) => {
        this.data = value;
      },
      error : (error : any) => {
        console.log(error);
      },
      complete : () => {
        console.log('complete');
      }
    })
*/

   /* this.intervSub = this.productService.getSecond().subscribe({
      next: (value : Number) => {
        this.interv = value;
      },
      error: (error : any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    })*/
  }
}
