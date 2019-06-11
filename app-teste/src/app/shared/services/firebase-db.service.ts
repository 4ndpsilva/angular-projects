import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { BaseModel } from 'src/app/shared/models/base-model';


@Injectable()
export class FirebaseDbService<T extends BaseModel> {
  protected collection: string;
  protected list: AngularFireList<T>;

  constructor(protected db: AngularFireDatabase) { 
    this.list = this.db.list(this.collection);
  }

  create(model: T){
    this.list.push(model);
  }

  update(model: T, key: string){
    this.list.update(key, model)
      .catch(e => this.handleError(e));
  }

  delete(key: string){
    this.db.object(`${this.collection}/${key}`).remove();
  }

  getById(key: string){
    return this.db.object(`${this.collection}/${key}`)
      .snapshotChanges().pipe(
        map(i => {
        const key = i.payload.key;
        const data = {key, ...i.payload.val()};
        return data;
      }));
  }

  getAll(){
    this.list.snapshotChanges()
      .pipe(map(changes =>{
          return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
        })
      );
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
} 