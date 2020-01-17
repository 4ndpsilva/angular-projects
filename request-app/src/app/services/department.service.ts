import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { FirebaseGenericService } from '../core/firebase-generic.service';
import { Department } from '../models/department.model';

@Injectable()
export class DepartmentService extends FirebaseGenericService<Department>{

  constructor(afs: AngularFirestore) { 
    super(Department, afs, Path.DEPARTMENTS.toString())
  }
}