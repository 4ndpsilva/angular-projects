import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { plainToClass } from 'class-transformer';

import { Icrud } from './icrud';
import { BaseModel } from '../models/base-model.model';

@Injectable()
export abstract class FirebaseGenericService<T extends BaseModel> implements Icrud<T> {
  ref: AngularFirestoreCollection<T>

  constructor(
    protected type: {new(): T}, 
    protected firestore: AngularFirestore,
    public path: string) { 
      this.ref = this.firestore.collection<T>(this.path);
    }

  get(id: string): Observable<T> {
    let doc = this.ref.doc<T>(id);
    return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
  }

  list(): Observable<T[]> {
    return this.ref.valueChanges();
  }

  saveOrUpdate(item: T): Promise<any> {
    if(!item){
      return;
    }

    let obj = null;

    if(item instanceof this.type){
      obj = item.toObject();
    }
    else{
      obj = item;
    }

    if(item.id){
      return this.ref.doc(item.id).update(obj);
    }

    return this.ref.add(item).then(res => {
      item.id = res.id;
      this.ref.doc(res.id).set(item);
    });
  }

  delete(id: string): Promise<void> {
    return this.ref.doc(id).delete();
  }

  docToClass(snapshotDoc): T{
    let obj = {
      id: snapshotDoc.id, 
      ...snapshotDoc(snapshotDoc.data as T)
    }

    let typed = plainToClass(this.type, obj);
    return typed;
  }
}