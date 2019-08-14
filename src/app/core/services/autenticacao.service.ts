import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoDTO } from 'src/app/shared/interfaces/autenticacao.dto';
import { RetornoAutenticacaoDTO } from 'src/app/shared/interfaces/retorno-autenticacao.dto';
import { AutenticacaoFacade } from '../facades/autenticacao.facade';

/**
 * @description
 *
 * Service singleton reponsável por uma série de recursos
 * voltados para a autenticação.
 *
 */
@Injectable({ providedIn: 'root' })
export class AutenticacaoService {

  constructor(
    private autenticacaoFacade: AutenticacaoFacade
  ) { }

  realizarLogin(autenticacaoDTO: AutenticacaoDTO): Observable<RetornoAutenticacaoDTO> {
    debugger
    return this.autenticacaoFacade.realizarLogin(autenticacaoDTO);
  }
}
