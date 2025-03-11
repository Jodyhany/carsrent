import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent  implements OnInit  {
  carid:number=0
  carinfo:any=[]
  constructor(private activerouter:ActivatedRoute,private carservices:CarsService)
  {
    this.carid=this.activerouter.snapshot.params['id']
  }
  ngOnInit(): void {
    this.carservices.getcarbyid(this.carid).subscribe({
     next:(res)=>{
      this.carinfo=res
     }
    })
  }
}
