import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SoftwareRoutingModule} from  './software/software-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SoftwareRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
