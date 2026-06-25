import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  email = 'admin@email.com';
  senha = '123456';
  erro = false;

  mensagemStatus =
    'Preencha o formulário e clique em Entrar. As credenciais serão validadas de forma local (simulação).';

  readonly loginService = inject(LoginService);
  readonly router = inject(Router);

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()){
      this.mensagemStatus = 'Você já está autenticado, usuário: '+this.email;
    }
  }

  onSubmit(): void {
    if(this.loginService.login(this.email, this.senha)){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.erro = true;
      this.mensagemStatus = 'Dados de login não encontrados.';
    }
  }
}
