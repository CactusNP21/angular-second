import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Board} from "../../../models/boardModel";
import {BoardManipulationService} from "../../../service/board-manipulation/board-manipulation.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @ViewChild("input") inputName: ElementRef;

  expanded = false
  disabled = true

  @Input() board: Board

  @Output() deleteBoard = new EventEmitter()
  @Output() updateBoard = new EventEmitter()

  constructor(private bsm: BoardManipulationService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.bsm.deleteBoard(this.board._id).subscribe(
      res => {
        console.log(this.board._id)
        this.deleteBoard.emit(this.board._id)
      }
    )
  }

  disable() {
    this.disabled = !this.disabled
  }

  edit() {
    this.disable()
    setTimeout(() => {
      this.inputName.nativeElement.focus()
    }, 0)
  }

  updateName() {
    this.disable()
    this.board.name = this.inputName.nativeElement.value
    this.bsm.updateBoardName(this.inputName.nativeElement.value, this.board._id).subscribe(
      res => {
        console.log(res)
        this.updateBoard.emit(this.board)
      }
    )
  }

}
