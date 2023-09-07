import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultRequest } from '../models/resultRequest';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories : Category[] = []

  private urlApi : string = environment.serverUrl.categories;

  constructor( private http: HttpClient) { }

  getCategories(): Observable<ResultRequest<Category>>{
    return this.http.get<ResultRequest<Category>>(this.urlApi)
  }
}
