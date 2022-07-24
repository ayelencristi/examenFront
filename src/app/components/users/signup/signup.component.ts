import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../dominio/User";
import {ApiUsersService} from "../../../services/api-users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  users: Array<User> = [];
  id: number;

  constructor(private service: ApiUsersService, activeRoute: ActivatedRoute, router: Router) {
    activeRoute.params.subscribe(
      params => {
        this.id = params['id']
        console.log(`ID de la url: ${this.id}`)
      }
    )
  }

  ngOnInit(): void {
  }

  enviarFormulario(formularioTD: any) {
    console.log(this.user);
    this.service
      .addUser(this.user)
      .subscribe(response => {
        console.log(response)
        this.users.push(response);
      });
    formularioTD.form.reset()
    //preguntar el tema del ruteo, no me toma la variable
  }
}
