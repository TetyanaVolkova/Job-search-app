import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private loaderStore = new BehaviorSubject<boolean>(false); 
  loader$ = this.loaderStore.asObservable();

  setLoader(value: boolean): void {
    this.loaderStore.next(value);
  }

  constructor(private http: HttpClient) { }

  getJobs(search) {
    if(search === null) {
      return this.http.get('https://remotive.com/api/remote-jobs?category=software-dev&limit=20').pipe(
        catchError(err => {
          throw err;
      })
    )}
    return this.http.get('https://remotive.com/api/remote-jobs?search='+search).pipe(
      catchError(err => {
        throw err;
      })
    )}
}
