import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from 'src/app/models/resultRequest';
import { Card } from 'src/app/models/card';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {

  categories : Category[] | undefined = [];
  categoriesSub : Subscription | undefined;
  currentCategory : Category | undefined;
  isLoading : boolean = true;
  productSub : Subscription | undefined;
  products : Card[] | undefined;
  affichage : Card[] =[];



  constructor(private categoryService : CategoryService, private productService : ProductService) {}

  ngOnInit() : void {


    this.categoriesSub = this.categoryService.getCategories().subscribe({
      next: (categories : ResultRequest<Category>) => {
        this.categories = categories.results
        this.handleClick(event, this.categories[0])
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



  handleClick(event : any, category : Category) {
    event.preventDefault();

    this.currentCategory = category;

    this.productSub = this.productService.getProducts().subscribe({
      next: (products : ResultRequest<Card>) => {
        if(products.isSuccess){
          let affichage = products.results;
          this.affichage = affichage.filter((product:Card) => {
            for(let index=0; index < product.categories.length; index++){
              if(product.categories[index].slug === category.slug){
                return true;
              }
            }
            return false;

          })
          console.log('affichage',affichage)

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

  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
    this.productSub?.unsubscribe();
  }


}
