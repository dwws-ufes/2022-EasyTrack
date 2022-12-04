import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from '../model/pacote.model';
import { Filtro } from '../model/filtro.model';
import { GenericService } from './generic.service';
import * as data from '../../assets/mock.json';

@Injectable({
  providedIn: 'root'
})
export class PacoteService extends GenericService<Pacote>{
  dados = data;
  constructor(http: HttpClient) {
    super(http, "pacote")
  }

  deletarGrupo(idPacotes: String[]){
    return this.http.post<String[]>(`${this._url_}/${this.url}/deletarGrupo`, idPacotes, { headers: this.cabecalho() })
  }

  getPorFiltro(filtro: Filtro){
    return new Observable((observer) => {
      observer.next(this.dados.pacoteList.filter(pacote => pacote.codigoOperadorLogistica == filtro.buscaCodigo).filter(pacote => pacote.etiquetas.find(etiqueta => etiqueta.id == filtro.buscaEtiqueta?.id)).filter(pacote => (filtro.buscaDataPostagemInicio ? new Date(pacote.dataPostagem) >= filtro.buscaDataPostagemInicio : true) && (filtro.buscaDataEntregaFim ? new Date(pacote.dataPostagem) >= filtro.buscaDataEntregaFim : true)).filter((pacote => (filtro.buscaDataPostagemInicio ? new Date(pacote.dataPostagem) >= filtro.buscaDataPostagemInicio : true) && (filtro.buscaDataEntregaFim ? new Date(pacote.dataPostagem) >= filtro.buscaDataEntregaFim : true))))
    })
    //return this.http.post<Pacote[]>(`${this._url_}/${this.url}/getPorFiltro`, filtros, { headers: this.cabecalho() })
  }

  adicionarEtiqueta(idEtiqueta: String, idPacotes: String[]){
    return new Observable((observer) => {
      if(idPacotes.find(pacoteId => pacoteId == this.dados.pacote.codigoOperadorLogistica)){
        let etiqueta = this.dados.etiquetas.find(etiqueta => etiqueta.id == idEtiqueta);
        etiqueta ? this.dados.pacote.etiquetas.push(etiqueta) : null;
      }
      for(let idPacote in idPacotes){
        let etiqueta = this.dados.etiquetas.find(etiqueta => etiqueta.id == idEtiqueta);
        etiqueta ? this.dados.pacoteList.find(pacote => pacote.codigoOperadorLogistica == idPacote)?.etiquetas.push(etiqueta) : null;
      }
      observer.next({"result":200, "mensage":"Sucess"})})
    return this.http.post<any>(`${this._url_}/${this.url}/adicionarEtiqueta`, {idEtiqueta, idPacotes}, { headers: this.cabecalho() }).subscribe(
      e => console.log(e)
    )
  }

  removerEtiqueta(idEtiqueta: String, idPacotes: String[]){
    return new Observable((observer) => {
      if(idPacotes.find(pacoteId => pacoteId == this.dados.pacote.codigoOperadorLogistica)){
        let etiqueta = this.dados.etiquetas.find(etiqueta => etiqueta.id == idEtiqueta);
        etiqueta ? this.dados.pacote.etiquetas = this.dados.pacote.etiquetas.filter(eti => eti.id != etiqueta?.id) : null;
      }
      observer.next({"result":200, "mensage":"Sucess"})})
    return this.http.post<String>(`${this._url_}/${this.url}/removerEtiqueta`, {idEtiqueta, idPacotes}, { headers: this.cabecalho() })
  }
}
