import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { TableComponent } from './components/users/table/table.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { PlanesComponent } from './components/home/planes/planes.component';
import { DevicesComponent } from './components/home/devices/devices.component';
import { UpdateComponent } from './components/users/update/update.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsaleComponent } from './components/sales/newsale/newsale.component';
import {URL_SERVICE} from "./services/api.service";
import { SalestableComponent } from './components/sales/salestable/salestable.component';
import { SaledetailsComponent } from './components/sales/saledetails/saledetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TableComponent,
    HomeComponent,
    CarouselComponent,
    PlanesComponent,
    DevicesComponent,
    UpdateComponent,
    ProductsComponent,
    NewsaleComponent,
    SalestableComponent,
    SaledetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: URL_SERVICE, useValue: 'https://62d6f29349c87ff2af30531f.mockapi.io/bootcamp-ng/api/v1/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
