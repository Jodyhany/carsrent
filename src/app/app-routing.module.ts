import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent,title:"cars rent"},
  {path:'',component:LandingComponent,title:"cars rent"},
  {path:'**',component:NotfoundComponent,title:"error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
