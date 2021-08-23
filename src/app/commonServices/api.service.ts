import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
    this.apiUrl = new AppConfig().apiUrl;
  }


  public sendEnquiry(payLoad): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'enquiry', payLoad, this.httpOptions);
  }
  public sendFile(formdata): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'excel', formdata, this.httpOptions);
  }

}
