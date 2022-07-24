import { Component, OnInit } from '@angular/core';
import {ApiUsersService} from "../../../services/api-users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../dominio/User";

@Component({
  selector: 'app-users',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  user: User = new User();
  users: Array<User>=[];
  // isAlta: boolean=true;
  // id:number;

  constructor(private service:ApiUsersService, activeRoute: ActivatedRoute, router: Router) {
    // activeRoute.params.subscribe(
    //   params => {
    //     this.id = params['id']
    //     console.log(`ID de la url: ${this.id}`)
    //   }
    // )
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.users = response)
  }

  // enviarFormulario(formularioTD: any) {
  //   console.log(this.user);
  //
  //   if(this.isAlta){
  //     this.service
  //       .addUser(this.user)
  //       .subscribe(response => {
  //         console.log(response)
  //         this.users.push(response);
  //       });
  //
  //
  //     formularioTD.form.reset()
  //   }else {
  //     this.service
  //       .updateUser(this.user.id, this.user)
  //       .subscribe(response => {
  //         console.log(response);
  //         //Recorrer el array y modificar el objeto con ese id
  //         //lo hicimos distinto
  //         this.service
  //           .getAll()
  //           .subscribe(response => this.users = response)
  //         this.isAlta = true;
  //       })
  //   }
  //
  // }

  eliminarUser(id:number){
    console.log("Eliminé persona con ID " + id)
    this.service
      .deleteUser(id)
      .subscribe(response => {
        console.log("respuesta del delete: " +response)
        this.service
          .getAll()
          .subscribe(response => this.users = response)
      });
  }

  // modificarUser(id:number){
  //   this.service
  //     .getById(id)
  //     .subscribe(response => {
  //       console.log(response);
  //       this.user = response;
  //       this.isAlta= false;
  //     })
    //como rutear desde codigo
    //router.navigate(['/mockpersona/' +id])
  // }

}