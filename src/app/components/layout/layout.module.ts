import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {CommonModule} from "@angular/common";
import { NavbarCarouselComponent } from './navbar-carousel/navbar-carousel.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarCarouselComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        NavbarCarouselComponent
    ]
})
export class LayoutModule { }
