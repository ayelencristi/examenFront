import { Component, OnInit } from '@angular/core';
import {Item} from "../dominio/Item";
import {ApiMoviesService} from "../../services/api-movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Result} from "../dominio/Result";
import {User} from "../dominio/User";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // @ts-ignore
  item: Item = new Item();
  results: Array<Item> = [];
  id:number;
  page: number;


  constructor(private servicio: ApiMoviesService, activatedRoute: ActivatedRoute, router: Router) {
    activatedRoute.params.subscribe(
      params => {
        this.id = params['id']
        console.log('ID de la url: ' +this.id)
        console.log(`Id de la url con template: ${this.id}`)
      }
    )
      activatedRoute.params.subscribe(
        params => {
          this.page = params['page']
          console.log('La page de la url es: ' +this.page)
        }
      )
  }

  ngOnInit(): void {
    // @ts-ignore
    this.servicio.getMovies().subscribe(response => this.results = response)
  }


}
