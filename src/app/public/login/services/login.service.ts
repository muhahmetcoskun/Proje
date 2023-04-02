import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Kullanici} from "../models/kullanici.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const API_URL = `${environment.BASE_URL}/api/login/`
//todoAC:controllerdeki pre-path ile aynı olacak. repuestmapping içeriği yazılacak. 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUser: Observable<Kullanici>;
  private currentUserSubject: BehaviorSubject<Kullanici>;

  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }

    this.currentUserSubject = new BehaviorSubject<Kullanici>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Kullanici {
    return this.currentUserSubject.value;
  }

  login(user: Kullanici): Observable<any> {
    return this.http.post<any>(API_URL + 'sign-in', user).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  // register(user: Kullanici): Observable<any> {
  //   return this.http.post(API_URL + 'sign-up', user);
  // }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new Kullanici);
  }
}
