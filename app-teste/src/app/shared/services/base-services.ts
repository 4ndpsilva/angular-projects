import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseModel } from 'src/app/shared/models/base-model';


export abstract class BaseService<T extends BaseModel>{
    protected http: HttpClient;

    constructor(
        protected apiPath: string, 
        protected injector: Injector,
        protected jsonToModelFunction: (jsonData) => T) { 
        this.http = this.injector.get(HttpClient);
    }

    create(model: T): Observable<T>{
        return this.http.post(this.apiPath, model).pipe(
            map(this.jsonToModel.bind(this)),
            catchError(this.handleError)
        );
    }
    
    update(model: T): Observable<T>{
        const url = `${this.apiPath}/${model.id}`;

        return this.http.put(url, model).pipe(
            map(() => model),
            catchError(this.handleError)
        );
    }
    
    delete(id: number): Observable<any>{
        const url = `${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(            
            map(() => null),
            catchError(this.handleError)
        );
    }

    getById(id: number): Observable<T>{
        const url = `${this.apiPath}/${id}`;
        return this.http.get(url).pipe(
            map(this.jsonToModel.bind(this)),
            catchError(this.handleError)
        );
    }

    getAll(): Observable<T[]>{
        return this.http.get(this.apiPath).pipe(
            map(this.jsonToModels.bind(this)),
            catchError(this.handleError)
        );
    }

    protected jsonToModels(jsonData: any[]): T[]{
        const models: T[] = [];
        jsonData.forEach(e => models.push(this.jsonToModelFunction(e)));
        return models;
    }
    
    protected jsonToModel(jsonData: any): T{
        return this.jsonToModelFunction(jsonData);
    }

    protected handleError(error: any): Observable<any>{
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }
}