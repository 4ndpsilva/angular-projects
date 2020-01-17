import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Request } from '../models/request.model';
import { FirebaseGenericService } from '../core/firebase-generic.service';

@Injectable()
export class RequestService extends FirebaseGenericService<Request>{

  constructor(afs: AngularFirestore) { 
    super(Request, afs, Path.REQUESTS.toString())
  }
}