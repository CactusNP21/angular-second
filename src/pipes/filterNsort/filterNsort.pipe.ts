import {Pipe, PipeTransform} from '@angular/core';
import {Board} from "../../models/boardModel";
import {combineLatest, map, Observable} from "rxjs";
import {SortService} from "../../service/sort/sort.service";
import {FilterService} from "../../service/filter/filter.service";

@Pipe({
  name: 'filterNsort'
})
export class FilterNsortPipe implements PipeTransform {

  constructor(private ss: SortService,
              private fs: FilterService) {
  }

  filterBoard(value: string, type: string, boards: Board[]) {
    if (value === '') {
      return boards;
    }
    let filteredUsers: Board[] = [];
    for (let board of boards) {
      if (type == 'name') {
        if (board['name'].toLowerCase().includes(value.toLowerCase())) {
          filteredUsers.push(board);
        }
      }
      if (type == 'tasks') {
        const {todo, progress, done} = board["tasks"]
        for (const job of todo) {
          if (job['name'].toLowerCase().includes(value.toLowerCase())) {
            filteredUsers.push(board);
          }
        }
        for (const job of progress) {
          if (job['name'].toLowerCase().includes(value.toLowerCase())) {
            if (!filteredUsers.includes(board)) {
              filteredUsers.push(board);
            }
          }
        }
        for (const job of done) {
          if (job['name'].toLowerCase().includes(value.toLowerCase())) {
            if (!filteredUsers.includes(board)) {
              filteredUsers.push(board);
            }
          }
        }
      }
    }
    return filteredUsers;
  }

  sortBoards(boards: Board[], sort: string) {
    switch (sort) {
            case 'date':
              return boards.sort((a, b) => (new Date(a[sort]) > new Date(b[sort])) ? -1 : 1);
            case 'name':
              return boards.sort((a, b) => (a[sort] < b[sort]) ? -1 : 1);
          }
          return boards
  }

  transform(boards: Board[]): Observable<Board[]> {
    return combineLatest([this.fs.getFilter(), this.ss.getSortField()]).pipe(
      map(([filter, sort]) => {
        console.log(filter)
        const {value, type} = filter
        return {boards: this.filterBoard(value, type, boards), sort: sort}
      }),
      map((res) => {
        return this.sortBoards(res.boards, res.sort)
      })
    )
  }

}
