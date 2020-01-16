import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angular/fire/auth';

@Injectable()
export class AuthenticationService {
	private user: Observable<firebase.User>;

	
  constructor(auth: AngularFireAuth) { 
	this.user = auth.authState
  }
  
  login(){
  }
  
logout()