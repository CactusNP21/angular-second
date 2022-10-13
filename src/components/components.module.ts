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
import {BoardCoreComponent} from './board-core/board-core.component';
import {ColumnComponent} from './board-core/columns/column.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {DirectiveModule} from "../directives/directive.module";
import {TaskComponent} from "./board-core/task/task.component";


@NgModule({
  declarations: [
    AuthorizationComponent,
    DashboardComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    AddBoardComponent,
    BoardComponent,
    TaskComponent,
    ColumnComponent,
    BoardCoreComponent
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
    PipesModule,
    RouterLink,
    RouterOutlet,
    DirectiveModule
  ]
})
export class ComponentsModule {
}
