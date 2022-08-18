import { Component, OnInit } from '@angular/core';
import {ApiMoviesService} from "../../services/api-movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../interfaces/User";
import {Filter, Item, Result} from "../interfaces/item.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  items: Item[] = [];
  id:number;
  page: Filter;


  constructor(private serviceMovies: ApiMoviesService) {}

  ngOnInit(): void {
    this.serviceMovies.getMovies(this.page).
    subscribe((result) =>{
      this.items = result.results;
     console.log(result)
    }, (err) => {
      this.items = [];
    })
  }
}
