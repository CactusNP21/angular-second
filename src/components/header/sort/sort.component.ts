import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SortService} from "../../../service/sort/sort.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  sortOpen = false;
  form = new FormGroup({
    "sortBy" : new FormControl
  });

  constructor(private ss: SortService) { }

  sendField () {
    setTimeout(() => {
      this.ss.sendSortField(this.form.value.sortBy)
    }, 0)
  }

  ngOnInit(): void {
  }

}
