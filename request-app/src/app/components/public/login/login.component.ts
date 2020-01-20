import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';

import { AuthenticationService } from './../../../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  message: string;
  sendEmail: boolean;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  singIn(){
    try{
      if(this.email == undefined || this.password == undefined){
        this.message = "Usuário e ou senha incorretos";
        return;
      }

      this.auth.login(this.email, this.password).then(() => {
        this.router.navigate(['/admin/panel'])
      })
      .catch(error => {
        let details = '';

        switch(error.code){
          case 'auth/user-not-found':{
            details = 'Não existe usuário para o e-mail informado';
            break;
          }
          case 'auth/invalid-email': {
            details = 'E-mail inválido';
            break;
          }
          case 'auth/invalid-password':{
            details = 'Senha inválida';
            break;
          }
          default: {
            details = error.message;
            break;
          }
        }

        this.message = `Erro no login. Detalhes: ${details}`;
      });
    }
    catch(error){
      this.message = `Erro no login. Detalhes: ${error}`;
    }
  }

  async sendLink(){
    const{ value: email } = await Swal.fire({
      title: 'Informe o email cadastrado',
      input: 'email',
      inputPlaceholder: 'email'
    });
  }
}