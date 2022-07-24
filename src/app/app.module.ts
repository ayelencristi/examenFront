import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TableComponent } from './components/users/table/table.component';
import {URL_SERVICE} from "./services/api-users.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './components/users/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MoviesComponent,
    TableComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: URL_SERVICE, useValue: 'https://62d6f29349c87ff2af30531f.mockapi.io/bootcamp-ng/api/v1/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
