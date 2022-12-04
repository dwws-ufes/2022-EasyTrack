import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { RegistroMovimentacao } from '../model/registroMovimentacao.model';
import { Observable } from 'rxjs';
import * as data from '../../assets/mock.json';

@Injectable({
  providedIn: 'root'
})
export class RegistroMovimentacaoService extends GenericService<Configuracao> {
  dados = data;

  constructor(http: HttpClient) {
    super(http, "registroMovimentacao")
  }

  getPorIdPacote(idPacote: String){
    return new Observable((observer) => {
      observer.next(this.dados.pacoteList.find(pacote => pacote.codigoOperadorLogistica == idPacote))})
    return this.http.get<RegistroMovimentacao[]>(`${this._url_}/${this.url}/porIdPacote?id=${idPacote}`, { headers: this.cabecalho() })
  }
}
