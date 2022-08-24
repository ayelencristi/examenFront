import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sale} from "../../interfaces/Sale";
import {SaleDetail} from "../../interfaces/SaleDetail";

@Component({
  selector: 'app-saledetails',
  templateUrl: './saledetails.component.html',
  styleUrls: ['./saledetails.component.css']
})
export class SaledetailsComponent implements OnInit {

  sale: Sale = new Sale()
  sales: Array<Sale>;
  saleDetail: SaleDetail = new SaleDetail()
  saleDetails: Array<SaleDetail>
  id: number;

  constructor(private service: ApiService, activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.params.subscribe(
      params => {
        this.id = params['id']
        console.log(`ID de la url: ${this.id}`)
      }
    )
  }

  ngOnInit() {
    // @ts-ignore
    this.service.getAllSales().subscribe(response => this.sales = response )

  }

}
