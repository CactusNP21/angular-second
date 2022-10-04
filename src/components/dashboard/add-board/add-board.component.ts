import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BoardManipulationService} from "../../../service/board-manipulation/board-manipulation.service";

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {

  menuOpen = false

  @Output()
  sendBoard = new EventEmitter()

  form = this.fb.group({
    "name": ['', Validators.required],
    "des": ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
              private bsm: BoardManipulationService) {

  }

  onSubmit() {
    this.bsm.uploadBoard(this.form.value.name!, this.form.value.des!).subscribe(
      res => {
        delete res['publisher']
        this.sendBoard.emit(res)
      }
    )
  }

  ngOnInit(): void {
  }

}
