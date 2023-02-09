import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http : HttpClient) { }

  // Load all the Category

  public categories(){
    return this._http.get(`${baseUrl}/category/`);
  }

  // Add category

  public addCategory(category : any){
    return this._http.post(`${baseUrl}/category/`, category);
  }
}
