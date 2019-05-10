import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  key: string;
  encrypt: string;

  constructor() { }

  ngOnInit() {
  }

  singIn(): void{
    this.key = '123';
    this.encrypt = CryptoJS.AES.encrypt(this.key, this.password);
    console.log(`Senha: ${this.encrypt.toString()}`);
  }
}