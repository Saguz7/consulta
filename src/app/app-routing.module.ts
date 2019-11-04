import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

import { HomeComponent } from './home/home.component';
import {AuthorizatedAfterLoginGuard} from "./core/guards/authorizatedafterlogin.guard";
import { OpciontwoComponent } from './opciontwo/opciontwo.component';
import { TarjetaInformativaComponent } from './components/tarjetainformativa/tarjetainformativa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ AuthorizatedAfterLoginGuard ] },
  { path: 'opciontwo', component: OpciontwoComponent,  pathMatch: 'full'},

  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
