import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  private ROCKETS_URL= "rockets";

  constructor(private http: HttpClient) { }

  public getAll(pagination: Pagination){
    return this.http.get(`${environment.baseUrl}/${this.ROCKETS_URL}?id=true&limit=${pagination.pPage}&offset=${pagination.cPage}`);
  }
}
