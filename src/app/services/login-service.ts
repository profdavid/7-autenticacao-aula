import { Injectable } from '@angular/core';

/**
 * Autenticação simulada só para aprendizado: valida e-mail/senha fixos
 * e grava o e-mail em `localStorage` na chave `usuario`.
 */
@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly STORAGE_KEY = 'usuario';

  /**
   * Simula login no servidor: aqui só compara com credenciais fixas.
   * Em um app real, você chamaria uma API e guardaria um token JWT, etc.
   */
  login(email: string, senha: string): boolean {
    return true;
  }

  /** Remove o registro de usuário do navegador (logout local). */
  logout(): void {
    
  }

  /** `true` se existir valor salvo na chave `usuario`. */
  isAuthenticated(): boolean {
    return false;
  }

  /** E-mail salvo após login bem-sucedido, ou `null` se não houver sessão local. */
  getUsuario(): string | null {
    return null;
  }
}
