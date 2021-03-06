import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  private url:string=environment.url+'login/';
  constructor(private _http:HttpClient) { }
  login(item)
  {
    let x = new HttpHeaders().set(environment.header1,environment.header2);
    let body=JSON.stringify(item)
    return this._http.post(this.url,body,{headers:x});

  }
}
