import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44352/api/"
  constructor(private httpClient : HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    let path = this.apiUrl + "carimagefiles/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(path)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let path = this.apiUrl + "carimagefiles/getallbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(path)
  }
}
