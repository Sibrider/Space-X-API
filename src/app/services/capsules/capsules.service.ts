import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Capsule } from '../../models/capsules.model';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {

  capsulesUrl = '/capsules';
  upcomingUrl = '/upcoming';
  pastUrl = '/past';
  constructor(private http: HttpClient) { }


  getAllCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(environment.baseUrl+this.capsulesUrl).pipe(
      catchError(this.handleError)
    );
  }


  getUpcomingCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(environment.baseUrl+this.capsulesUrl+this.upcomingUrl).pipe(
      catchError(this.handleError)
    );
  }


  getPastCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(environment.baseUrl+this.capsulesUrl+this.pastUrl).pipe(
      catchError(this.handleError)
    );
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');

  }

}
