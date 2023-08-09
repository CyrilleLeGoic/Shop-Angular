import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-product-additional-info',
  templateUrl: './product-additional-info.component.html',
  styleUrls: ['./product-additional-info.component.css']
})
export class ProductAdditionalInfoComponent implements OnInit {

  product: Card | undefined;

  ngOnInit(): void {

  }

}
