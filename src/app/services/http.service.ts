import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, { headers: this.headers });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(url, body, { headers: this.headers });
  }

  put<T>(url:string,body:any):Observable<T>{
    return this.httpClient.put<T>(url,body,{headers:this.headers});
  }

  delete<T>(url:string):Observable<T>{
    return this.httpClient.delete<T>(url,{headers:this.headers});
  }
}
