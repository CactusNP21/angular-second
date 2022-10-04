import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterService} from "../../../service/filter/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild("filter") filterInput: ElementRef;

  filterValue: string = ''
  disable = true
  opened = false

  form = new FormGroup({
    filterBy: new FormControl
  })

  constructor(private fs: FilterService) {
  }

  sendFilterValue() {
    this.fs.sendFilterValue(this.filterValue)
  }

  sendFilterBy() {
    setTimeout(() => { this.fs.sendFilterBy(this.form.value.filterBy) }, 0)
    setTimeout(() => {
      this.filterInput.nativeElement.focus()
    }, 1)
    this.disable = false
  }



  ngOnInit(): void {
  }

}
