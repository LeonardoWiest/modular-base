import { Injectable } from '@angular/core';
import { AutenticacaoDTO } from '@shared/models/autenticacao.dto';
import { RetornoAutenticacaoDTO } from '@shared/models/retorno-autenticacao.dto';
import { Observable } from 'rxjs';

/**
 * @description
 *
 * Service singleton reponsável por uma série de recursos
 * voltados para a autenticação.
 *
 */
@Injectable({ providedIn: 'root' })
export class AutenticacaoService {
  constructor() { }

  realizarLogin(
    autenticacaoDTO: AutenticacaoDTO
  ): Observable<RetornoAutenticacaoDTO> {
    return null;
  }
}
