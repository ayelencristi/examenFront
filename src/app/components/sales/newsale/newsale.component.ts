import {Component, OnInit} from '@angular/core';
import {Sale} from "../../interfaces/Sale";
import {Seller} from "../../interfaces/Seller";
import {Product} from "../../interfaces/Product";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SaleDetail} from "../../interfaces/SaleDetail";

@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.component.html',
  styleUrls: ['./newsale.component.css']
})
export class NewsaleComponent implements OnInit {

  sale: Sale = new Sale()
  sales: Array<Sale>
  seller: Seller = new Seller();
  sellers: Array<Seller>;
  product: Product = new Product();
  products: Array<Product>;
  saleDetail: SaleDetail = new SaleDetail()
  quantity: number;

  constructor(private service: ApiService, activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.service.getAllSellers().subscribe(response => this.sellers = response)
    // @ts-ignore
    this.service.getAllProducts().subscribe(response => this.products = response)
    // @ts-ignore
    this.service.getAllSales().subscribe(response => this.sales = response.sale_detail )
  }

  enviarFormulario(formularioTD: any) {
    console.log(formularioTD)
    console.log(this.sale);
    console.log(this.seller)
    console.log(this.product)
    console.log(this.quantity)
    this.sale.seller = this.seller;
    this.saleDetail.product = this.product;
    this.saleDetail.quantity = this.quantity;
    this.sale.saleDetails = [this.saleDetail]
    this.service
      .addSale(this.sale)
      .subscribe(response => {
        console.log(response)
        this.sales.push(response);
      });
    formularioTD.form.reset()
    this.router.navigate(['sales']);
  }

}
