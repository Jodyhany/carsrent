import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RecentcarsComponent } from './recentcars/recentcars.component';
import { HowItworkComponent } from './how-itwork/how-itwork.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TESTIMONIALSComponent } from './testimonials/testimonials.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    RecentcarsComponent,
    HowItworkComponent,
    WhyUsComponent,
    TESTIMONIALSComponent,
    DownloadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
