import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";
import {FilterService} from "../../service/filter/filter.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  allowed = false
  home = true



  //
  //
  //
  //
  //
  //
  //
  // ngOnInit(): void {
  //
  //   this.router.events
  //     // @ts-ignore
  //     .pipe(filter(e => e instanceof NavigationEnd),
  //       // capture the new URL
  //       map((e: NavigationEnd) => e.url))
  //     .subscribe(url => {
  //       this.home = url === '/'
  //     });
  // }

  constructor(
    private fs: FilterService,
    // private os: OrderService,
    private router: Router) {

  }

  logOut() {
    sessionStorage.clear()
    this.router.navigate(['/auth'])
  }

  // sendOrder(boolean: boolean) {
  //     this.os.sendOrder(boolean)
  //   }



  ngOnInit(): void {

    this.router.events
      .pipe(
        // @ts-ignore
        filter(e => e instanceof NavigationEnd),
        map((e: NavigationEnd) => e.url))
      .subscribe(url => {
        this.allowed = url === '/dashboard'
        this.home = url === '/dashboard'
      });
  }

}
