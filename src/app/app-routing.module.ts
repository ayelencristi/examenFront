import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from "./components/users/table/table.component";
import { HomeComponent } from "./components/home/home.component";
import { UpdateComponent } from './components/users/update/update.component';
import {ProductsComponent} from "./components/products/products.component";
import {NewsaleComponent} from "./components/sales/newsale/newsale.component";
import {SalestableComponent} from "./components/sales/salestable/salestable.component";
import {SaledetailsComponent} from "./components/sales/saledetails/saledetails.component";

const routes: Routes = [
  { path: 'sales', component: SalestableComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'users', component: TableComponent },
  { path: 'newsale', component: NewsaleComponent },
  { path: 'saledetails', component: SaledetailsComponent},
  {path: 'update/:id', component: UpdateComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
