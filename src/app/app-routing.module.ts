import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "../components/authorization/authorization.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {AuthorizationGuard} from "../guards/authorization.guard";
import {DashboardResolver} from "../components/dashboard/dashboard.resolver";

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard], resolve : {
      boards: DashboardResolver
    } }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [],
  bootstrap:    []
})
export class AppRoutingModule { }
