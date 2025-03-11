import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent {
  carlist:any
  pagenum=1
  constructor(private carservices:CarsService){
    carservices.getallcars().subscribe({
      next:(res)=>{
        this.carlist=res
      }
    })
  }
}
