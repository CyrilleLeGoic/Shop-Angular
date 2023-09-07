import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Card } from '../../models/card';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from 'src/app/models/resultRequest';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  @Input() card: Card | undefined


  slug: string|undefined
  product : Card | undefined;
  productSub : Subscription | undefined;
  isLoading : boolean = true;
  currentImage : string | undefined = '';


  constructor(private route : ActivatedRoute, private productService : ProductService) { }



  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug']
    this.productSub = this.productService.getProducts().subscribe({
      next: (products : ResultRequest<Card>) => {
        this.product = products.results.find((product) => product.slug === this.slug)
        this.isLoading = false;
        this.currentImage = this.product?.imageUrl[0]
      },
      error : (error : any) => {
        console.log(error);
        this.isLoading = true;
      },
      complete : () => {
        console.log(this.product);
      }


    })
}

    ngOnDestroy(): void {
      this.productSub?.unsubscribe();
    }

    handleChangeCurrentImage(imageUrl : string) {
      this.currentImage = imageUrl;
    }

    handleChangeDetails(component: any) {
      component.product = this.product;
    }

}

