import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CategoriesService } from '../Services/categories.service';


const routes:Routes=[
  {path:'', redirectTo:'product',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductsComponent},
  {path:'product/:id',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent},
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
