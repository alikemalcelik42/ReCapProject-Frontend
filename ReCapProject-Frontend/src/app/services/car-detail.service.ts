import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44352/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let path = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(path)
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>> {
    let path = this.apiUrl + "cars/getcardetailbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(path)
  }
}
