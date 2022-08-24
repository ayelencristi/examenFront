import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../interfaces/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = new Product();
  products: Array<Product>;
  id:number;

  constructor(private service:ApiService, activeRoute: ActivatedRoute, private router: Router) {
    // activeRoute.params.subscribe(
    //   params => {
    //     this.id = params['id']
    //     console.log(`ID de la url: ${this.id}`)
    //   }
    // )
  }

  ngOnInit(): void {
    // @ts-ignore
    this.service.getAllProducts().subscribe(response => this.products = response)
  }
  ngOnChange(): void {
    // @ts-ignore
    this.service.getAllProducts().subscribe(response => this.products = response)
  }


  // modificarUser(id: number) {
  //   this.service.getById(id)
  //   this.router.navigate(['update/' + id])
  // }

}
