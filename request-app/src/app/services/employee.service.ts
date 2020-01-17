import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Employee } from './../models/employee.model';
import { FirebaseGenericService } from '../core/firebase-generic.service';

@Injectable()
export class EmployeeService extends FirebaseGenericService<Employee>{

  constructor(afs: AngularFirestore) { 
    super(Employee, afs, Path.EMPLOYEES.toString())
  }
}