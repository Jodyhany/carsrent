import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recentcars',
  templateUrl: './recentcars.component.html',
  styleUrls: ['./recentcars.component.css']
})
export class RecentcarsComponent {
  carlist:any
  searchquery:string=''
constructor(private mycars:CarsService){
  this.getsomecar()
}
getsomecar():void{
  this.mycars.getnumofcars().subscribe({
    next:(res)=>{
      this.carlist =res
    }
  })
}
search(){
  console.log('Searching for:',this.searchquery);
}

}
