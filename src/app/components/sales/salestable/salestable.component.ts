// @ts-ignore

import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sale} from "../../interfaces/Sale";

@Component({
  selector: 'app-salestable',
  templateUrl: './salestable.component.html',
  styleUrls: ['./salestable.component.css']
})

export class SalestableComponent implements OnInit, OnChanges {

  sale: Sale = new Sale();
  sales: Array<Sale>;
  id:number;

  constructor(private service:ApiService, activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.params.subscribe(
      params => {
        this.id = params['id']
        console.log(`ID de la url: ${this.id}`)
      }
    )
  }

  ngOnInit(): void {
    // @ts-ignore
    this.service.getAllSales().subscribe(response => this.sales = response)

  }

  // ngOnChange(): void {
  //   // @ts-ignore
  //   this.service.getAllSales().subscribe(response => this.sales = response)
  // }

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    this.service.getAllSales().subscribe(response => this.sales = response)
  }

  getDetails(id: number) {
    this.service.getSaleById(id)
    this.router.navigate(['/saledetails' + id])
  }
}
