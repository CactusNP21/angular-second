import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {BoardManipulationService} from "../../service/board-manipulation/board-manipulation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  registration = true

  form = this.fb.group({
      "login": ['', Validators.required],
      "password": ['', Validators.required]
    }
  )
  constructor(private fb: FormBuilder,
              private auth: AuthorizationService,
              private bms: BoardManipulationService,
              private router: Router
              ) { }

  register() {
    this.auth.register(this.form.value.login!, this.form.value.password!)
      .subscribe(res => {
        console.log(res)
        this.registration = false
      })
  }

  login(){
    this.auth.getToken(this.form.value.login!, this.form.value.password!)
      .subscribe(token => {
        console.log(token)
        sessionStorage.setItem('token', token)
        this.router.navigate(['/dashboard'])
      })

  }

  ngOnInit(): void {

  }


}
