import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';
import { carde } from '../car-info';

@Component({
  selector: 'app-recentcars',
  templateUrl: './recentcars.component.html',
  styleUrls: ['./recentcars.component.css']
})
export class RecentcarsComponent implements OnInit{
  carlist:carde[]=[]
  carlistsearch:any
  searchquery:string=''
  carnum:number=4
  searchstats:boolean=false
  nocarfound:boolean=false
constructor(private mycars:CarsService){
  
}
ngOnInit(): void {
  this.getsomecar()
  this.search()
}
getsomecar():void{
  this.mycars.getnumofcars(this.carnum).subscribe({
    next:(res)=>{
      console.log()
      this.carlist =res
    }
  })
}
getcarbyserch():void{
  this.mycars.getcarbysearch(this.searchquery).subscribe({
    next:(res)=>{
     this. carlistsearch=res
     if(this. carlistsearch.length ==0) this.nocarfound=true
    }
  })
}
search(){
  this.searchquery.toUpperCase
  this.searchstats=true
  this.getcarbyserch()
}

}
