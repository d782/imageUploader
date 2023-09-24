import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  post(body:any,method:string,options?:any){
    return this.http.post(environment.api+method,body,options)
  }

  get(method:string,options?:object){
    return this.http.get(environment.api+method,options)
  }
}
