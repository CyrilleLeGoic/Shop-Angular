import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResultRequest } from '../models/resultRequest';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products : Card[] = []

  private urlApi : string = environment.serverUrl.products;

  constructor( private http: HttpClient) {}

  /*
  getProducts() : Promise<Card[]> {
    return new Promise((resolve, reject) => {
      if(this.products.length > 0) {
        resolve(this.products);
      } else {
        reject('No products found !');
      }
    });
  }
  */

    /* BASE DES REQUETES HTTP :

    GET pour récupérer les données sur le serveur
    POST pour envoyer des données au serveur
    PUT et PATCH pour modifier des données du serveur
    DELETE pour supprimer des données du serveur
    */

  getProducts(): Observable<ResultRequest<Card>>{
    return this.http.get<ResultRequest <Card>>(this.urlApi)
  }


  getNumber(): Observable<Number> {
    return of(45);
  }

  getSecond(): Observable<Number> {
    return interval(1000);
  }
}
