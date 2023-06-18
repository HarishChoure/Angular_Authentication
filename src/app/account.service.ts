import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:4323/api/account/login', obj);
  }
}
