import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Totalizer } from './../model/totalizer';
import { environment } from './../../environments/environment';

@Injectable({providedIn: 'root'})
export class SearchService {
  url = "lotofacil";

  constructor(private http: HttpClient) { }

  search(): Observable<Totalizer>{
    return this.http.get<Totalizer>(`${environment.apiPath}/${this.url}`);
  }
}