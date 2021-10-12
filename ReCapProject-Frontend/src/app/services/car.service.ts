import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44352/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(path)
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getallbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(path)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getallbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(path)
  }

}
