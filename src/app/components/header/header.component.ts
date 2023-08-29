import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

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
  navs : Item[] | undefined = nav_items
  auth : Item[] | undefined = auth_items
  isDisplayMenu : boolean = false;



  constructor(
    private productService : ProductService
  ) {}

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
    this.intervSub?.unsubscribe();
  }

  onClickDisplayMenu() {
    this.isDisplayMenu = !this.isDisplayMenu;
  }

  handleCloseMobileNav() {
    this.isDisplayMenu = false;
  }

  ngOnInit(): void {
  }
}
