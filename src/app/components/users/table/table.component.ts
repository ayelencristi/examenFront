import { Component, OnInit } from '@angular/core';
import {Seller} from "../../interfaces/Seller";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  seller: Seller = new Seller();
  sellers: Array<Seller>;
  // id:number;

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
    this.service.getAllSellers().subscribe(response => this.sellers = response)
  }
  ngOnChange(): void {
    // this.service.getAll().subscribe(response => this.users = response.data)
  }


  }
