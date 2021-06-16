import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launches } from 'src/app/models/launches.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Launches[]> {
    return this.http.get<Launches[]>('https://api.spacexdata.com/v3/launches');
  }
}
