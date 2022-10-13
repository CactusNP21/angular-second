import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
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

  constructor(
    private fs: FilterService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  logOut() {
    sessionStorage.clear()
    this.router.navigate(['/auth'])
  }


  ngOnInit(): void {
    this.router.events
      // @ts-ignore
      .pipe(filter(e => e instanceof NavigationEnd),
        // capture the new URL
        map((e: NavigationEnd) => e.url))
      .subscribe(url => {
        this.allowed = url === '/auth'
      });
  }

}
