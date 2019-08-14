import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPointConsts } from 'src/app/shared/constants/endpoints.constants';
import { AutenticacaoDTO } from 'src/app/shared/interfaces/autenticacao.dto';
import { RetornoAutenticacaoDTO } from 'src/app/shared/interfaces/retorno-autenticacao.dto';

@Injectable({ providedIn: 'root' })
export class AutenticacaoFacade {

    constructor(private http: HttpClient) { }

    realizarLogin(autenticacaoDTO: AutenticacaoDTO): Observable<RetornoAutenticacaoDTO> {
        debugger
        return this.http.post<RetornoAutenticacaoDTO>(EndPointConsts.AUTENTICACAO.REALIZAR_LOGIN, autenticacaoDTO);
    }

}