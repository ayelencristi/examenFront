import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";
import { TableComponent } from "./components/users/table/table.component";
import { SignupComponent } from "./components/users/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { UpdateComponent } from './components/users/update/update.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'usuarios', component: TableComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'update/:id', component: UpdateComponent},
  { path: '', component: HomeComponent },
  // {path: '', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
