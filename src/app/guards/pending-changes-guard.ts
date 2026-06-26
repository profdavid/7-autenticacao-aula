import { CanDeactivateFn } from '@angular/router';

export interface HasPendingChanges{
  hasPendingChanges(): boolean;
}

export const pendingChangesGuard: CanDeactivateFn<HasPendingChanges> = (component, currentRoute, currentState, nextState) => {
  if(!component.hasPendingChanges()){
    return true;
  }

  return window.confirm('Existem alterações não salvas. Deseja realmente sair desta tela?');
};
