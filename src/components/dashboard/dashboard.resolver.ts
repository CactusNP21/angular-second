import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BoardManipulationService} from "../../service/board-manipulation/board-manipulation.service";
import {Board} from "../../models/boardModel";

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<any> {
  constructor(private bms: BoardManipulationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Board[] | Observable<any> {
    return this.bms.loadBoards()
  }
}
