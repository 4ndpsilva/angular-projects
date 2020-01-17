import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
	private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
	  this.user = afAuth.authState
  }  

  login(email: string, passowrd: string): Promise<firebase.auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, passowrd);
  }

  logout(): Promise<void>{
    return this.afAuth.auth.signOut()
  }

  resetPassword(email: string){
    this.afAuth.auth.sendPasswordResetEmail(email)
  }
}