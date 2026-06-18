import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-armazenamento',
  imports: [FormsModule],
  templateUrl: './exemplo-armazenamento.html',
  styleUrl: './exemplo-armazenamento.css',
})
export class ExemploArmazenamento {
  readonly chaveLocal = 'demo-exemplo-local';
  readonly chaveSessao = 'demo-exemplo-sessao';

  /** Valores ligados aos campos de texto (ngModel). */
  textoParaSalvarLocal = '';
  textoParaSalvarSessao = '';

  /** O que foi lido do storage na última operação de “Recuperar”. */
  lidoDoLocal = '(ainda não recuperou)';
  lidoDaSessao = '(ainda não recuperou)';
  mensagemLocal = '';
  mensagemSessao = '';

  /** Grava string em localStorage. Só aceita strings; objetos use JSON.stringify. */
  salvarLocal(): void {
    
  }

  /** Lê string de localStorage. Retorna null se a chave não existir. */
  recuperarLocal(): void {
    
  }

  /** Remove só esta chave do localStorage. */
  limparLocal(): void {
    
  }

  salvarSessao(): void {
    
  }

  recuperarSessao(): void {
    
  }

  limparSessao(): void {
    
  }
}
