import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Board, serverResponse, Tasks} from "../../models/boardModel";
import {BehaviorSubject, delay, map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BoardManipulationService {
  boards: Board[]
  public subject = new BehaviorSubject<Tasks | undefined>(undefined)

  constructor(private http: HttpClient) {
  }

  getTasks(id: string) {
    return this.boards.find(value => value._id === id)!.tasks
  }



  loadBoards() {
    return this.http.get<{ tasks: Board[] }>('http://localhost:8080/user/tasks').pipe(
      map(value => {
        this.boards = value.tasks
        return value.tasks
      })
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
    return this.http.put('http://localhost:8080/user/update/name', {
      name: name,
      id: id
    })
  }

  updateBoardTasks(id: string, tasks: Tasks){
    return this.http.put('http://localhost:8080/user/update/tasks', {
      id: id,
      tasks: tasks
    })
  }

}
