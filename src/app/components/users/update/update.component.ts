import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { ApiUsersService } from '../../../services/api-users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user: User = new User();
  users: Array<User> = [];
  id: number;

  constructor(private service: ApiUsersService, activeRoute: ActivatedRoute, private router: Router) {
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
      .updateUser(this.id, this.user)
      .subscribe(response => {
        console.log(response)
        this.user = response;
      });
    formularioTD.form.reset()
    this.router.navigate(['usuarios']);
  }

}
