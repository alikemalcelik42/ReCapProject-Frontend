import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = []
  currentColor:Color
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    })
  }

  setCurrentColor(color:Color) {
    this.currentColor = color
  }
  
  getCurrentColorClass(color:Color):string {
    if(this.currentColor && this.currentColor.id == color.id) {
      return "list-group-item active"
    }
    return "list-group-item"
  }

  getAllColorsClass():string {
    if(!this.currentColor) {
      return "list-group-item active"
    }
    return "list-group-item"
  }

  removeCurrentColor() {
    if(this.currentColor) {
      this.currentColor = null
    }
  }

}
