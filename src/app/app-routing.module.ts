import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
