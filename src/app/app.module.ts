import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BikeComponent } from './components/bike/bike.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InfoBikeComponent } from './components/info-bike/info-bike.component';
import { CaracteristicsBikeComponent } from './components/caracteristics-bike/caracteristics-bike.component';
import { BikeSliderComponent } from './components/bike-slider/bike-slider.component';
import { BikeShopComponent } from './components/bike-shop/bike-shop.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikeComponent,
    InfoBikeComponent,
    CaracteristicsBikeComponent,
    BikeSliderComponent,
    BikeShopComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
