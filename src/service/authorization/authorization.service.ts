import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  register(login: string, password: string) {
    return this.http.post('http://localhost:8080/user/register', {
      username: login,
      password: password
    })
  }

  getToken(login: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:8080/user/login', {
      username: login,
      password: password
    }).pipe(
      map(value => value.token),
      catchError(error => {
        throw Error('error')
      })
    )
  }

}
