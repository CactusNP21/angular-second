import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "../components/authorization/authorization.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {AuthorizationGuard} from "../guards/authorization.guard";
import {DashboardResolver} from "../components/dashboard/dashboard.resolver";
import {BoardCoreComponent} from "../components/board-core/board-core.component";


const routes: Routes = [
    {path: 'auth', component: AuthorizationComponent},
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {
      path: 'dashboards',
      component: DashboardComponent,
      canActivate: [AuthorizationGuard],
      resolve: {boards: DashboardResolver},
    },
    {
      path: 'dashboards/board/:id',
      component: BoardCoreComponent,
      resolve: {boards: DashboardResolver},
    }
  ]
;

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [],
  bootstrap: []
})
export class AppRoutingModule {
}
