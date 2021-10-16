import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[] = []

  constructor(private carService:CarDetailService, private activetedRoot:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activetedRoot.params.subscribe((params) => {
      if(params["carId"]) {
        this.getCarDetailByCarId(params["carId"])
      }
      else {
        this.getCarDetails()
      }
    })
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data
      console.log(this.carDetails);
    })
  }
  
  getCarDetailByCarId(carId:number) {
    this.carService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetails = response.data
    })
  }

}
