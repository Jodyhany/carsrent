import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { carde } from '../car-info';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent  {
  carlist:carde[]=[]
  pagenum=1
  constructor(private carservices:CarsService){
    carservices.getallcars().subscribe({
      next:(res)=>{
        console.log(res)
        this.carlist=res
      }
    })
  }
}
