import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getJobs(search) {
    if(search === null) {
      return this.http.get('https://remotive.io/api/remote-jobs?category=software-dev&limit=20').pipe(
        catchError(err => {
          throw err;
      })
    )}
    return this.http.get('https://remotive.io/api/remote-jobs?search=' + search).pipe(
      catchError(err => {
        throw err;
      })
    )}
}
