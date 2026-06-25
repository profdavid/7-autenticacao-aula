import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  /** E-mail lido do localStorage após login. */
  usuario: string | null = null;

  mensagemStatus =
    'Carregando informações da sessão local (localStorage, chave "usuario")…';

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    if(!this.loginService.isAuthenticated()){
      void this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.loginService.logout();
    void this.router.navigate(['/login']);
  }
}
