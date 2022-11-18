import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from '../model/pacote.model';
import { map } from 'rxjs/operators';
import { Filtro } from '../model/filtro.model';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root'
})
export class PacoteService extends GenericService<Pacote>{

  constructor(http: HttpClient) {
    super(http, "pacote")
  }

  deletarGrupo(idPacotes: String[]){
    console.log(idPacotes)
    //return this.http.delete<String[]>(`${this.url}/pacote/grupo`, idPacotes)
  }

  /*getTodos(): Observable<Pacote[]>{
    return this.http.get<Pacote[]>(`${this.url}/pacote/getTodos`).pipe(map((pacotes: Pacote[]) => {
      return pacotes.map((pacote: Pacote) => {
        if(pacote.dataEntrega) pacote.dataEntrega = new Date(pacote.dataEntrega)
        if(pacote.dataPostagem) pacote.dataPostagem = new Date(pacote.dataPostagem)
        return pacote
      })  
    }))
  }*/

  getPorFiltro(filtros: Filtro[]): Observable<Pacote[]>{
    console.log(filtros)
    return this.http.get<Pacote[]>(`${this.url}/pacote/getTodos`)
    //return this.http.get<Pacote[]>(`${this.url}/pacote/getPorFiltro`, filtros)
  }
}
