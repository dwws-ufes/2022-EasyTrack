import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../model/etiqueta.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService extends GenericService<Etiqueta>{

  constructor(http: HttpClient) { 
    super(http, "etiqueta")
  }

  criarEAssociarPacote(etiqueta: Etiqueta, idPacotes: String[]){
    return this.http.post<any>(`${this._url_}/${this.url}/criarEAssociarPacote`, {etiqueta, idPacotes}, { headers: this.cabecalho() })
    .subscribe((e) => {
      console.log(e)
    })
}

  getPorIdPacote(idPacotes: String[]){
    return this.http.post<Etiqueta[]>(`${this._url_}/${this.url}/getPorIdPacotes`, {idPacotes}, { headers: this.cabecalho() })
  }
}
