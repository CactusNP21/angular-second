import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from './authorization/authorization.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeaderComponent} from './header/header.component';
import {FilterComponent} from './header/filter/filter.component';
import {SortComponent} from './header/sort/sort.component';
import {AddBoardComponent} from './dashboard/add-board/add-board.component';
import {BoardComponent} from './dashboard/board/board.component';
import {PipesModule} from "../pipes/pipes.module";


@NgModule({
  declarations: [
    AuthorizationComponent,
    DashboardComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    AddBoardComponent,
    BoardComponent
  ],
  exports: [
    AuthorizationComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule {
}
