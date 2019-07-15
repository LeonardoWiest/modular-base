import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService {
  realizarLogin(login: string, senha: string): Observable<any> {
    debugger;
    return null;
  }
}
