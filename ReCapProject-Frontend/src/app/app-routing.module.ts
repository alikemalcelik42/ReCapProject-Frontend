import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  {
    "path": "",
    "pathMatch": "full",
    redirectTo: "/cars"
  },

  {
    "path": "cars",
    component:CarComponent
  },

  {
    "path": "cars/brand/:brandId",
    component:CarComponent
  },

  {
    "path": "cars/color/:colorId",
    component:CarComponent
  },

  {
    "path": "cars/cardetail/:carId",
    component:CarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
