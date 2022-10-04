import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Board, serverResponse} from "../../models/boardModel";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BoardManipulationService {

  constructor(private http: HttpClient) {
  }

  loadBoards() {
    return this.http.get<{ tasks: Board[] }>('http://localhost:8080/user/tasks').pipe(
      map(value => value.tasks)
    )
  }

  uploadBoard(name: string, des: string) {
    return this.http.post<serverResponse>('http://localhost:8080/user/create', {
      name: name,
      des: des
    }).pipe(
    )
  }

  deleteBoard(id: string) {
    return this.http.delete('http://localhost:8080/user/delete', {
      body: {id: id}
    })
  }

  updateBoardName(name: string, id: string) {
    return this.http.put('http://localhost:8080/user/update', {
      name: name,
      id: id
    })
  }

}
