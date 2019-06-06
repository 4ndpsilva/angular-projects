import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contato } from './contato';


@Injectable()
export class ContatoService {
  private fbCollection: AngularFirestoreCollection<any>;
  collection: string = '/pessoas';

  constructor(private db: AngularFirestore) {
    this.fbCollection = this.db.collection(this.collection);
  }

  create(entity: Contato): Promise<void>{
    entity.uid = this.db.createId(); 
    return this.fbCollection
      .doc<Contato>(entity.uid)
      .set(entity);
  } 

  update(entity: Contato): Promise<void>{
    return this.fbCollection
      .doc<Contato>(entity.uid)
      .update(entity);
  }

  delete(uid: string): Promise<void>{
    return this.fbCollection.doc<Contato>(uid).delete();
  }

  getById(uid: string): Observable<Contato>{
    return this.fbCollection.doc<Contato>(uid).valueChanges();
  }

  getAll(): Observable<any[]> {
    return this.fbCollection.valueChanges();
  }
}