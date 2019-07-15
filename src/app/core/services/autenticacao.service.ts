import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequestServiceHelper } from '@shared/helpers/http.request.service';
import { AutenticacaoDTO } from '@shared/models/autenticacao.dto';
import { RetornoAutenticacaoDTO } from '@shared/models/retorno-autenticacao.dto';

/**
 * @description
 *
 * Service singleton reponsável por uma série de recursos
 * voltados para a autenticação.
 *
 */
@Injectable({ providedIn: 'root' })
export class AutenticacaoService {
  constructor(private httpRequestServiceHelper: HttpRequestServiceHelper) {}

  realizarLogin(
    autenticacaoDTO: AutenticacaoDTO
  ): Observable<RetornoAutenticacaoDTO> {
    return this.httpRequestServiceHelper.post().pipe(map(retorno => retorno));
  }
}
