import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-product-vendor',
  templateUrl: './product-vendor.component.html',
  styleUrls: ['./product-vendor.component.css']
})
export class ProductVendorComponent implements OnInit {
  product: Card | undefined;

  ngOnInit(): void {

  }

}
