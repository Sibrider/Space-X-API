import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Pagination } from '../../models/pagination';
import { Observable } from 'rxjs';
import { Rocket } from 'src/app/models/rocket_complete.model';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  private ROCKETS_URL = "rockets";

  constructor(private http: HttpClient) { }

  public getAll(pagination: Pagination): Observable<Array<Rocket>> {
    return this.http.get<Array<Rocket>>(`${environment.baseUrl}/${this.ROCKETS_URL}?id=true&limit=${pagination.pPage}&offset=${pagination.cPage}`);
  }
}
