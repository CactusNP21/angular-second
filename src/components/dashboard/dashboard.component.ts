import {Component, OnInit} from '@angular/core';
import {Board} from "../../models/boardModel";
import {BoardManipulationService} from "../../service/board-manipulation/board-manipulation.service";
import {ActivatedRoute} from "@angular/router";
import {FilterNsortPipe} from "../../pipes/filterNsort/filterNsort.pipe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   boards: Board[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }
  addBoard(value: Board) {
    this.boards.push(
      value
    )
    console.log(this.boards)
  }
  deleteBoard (_id: string) {
    console.log(_id)
    this.boards =  this.boards.filter(value => value._id !== _id)
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({boards}) => {
      console.log(boards)
      this.boards = boards
    })

  }
}
