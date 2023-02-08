import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SparqlData } from '../interfaces/sparql';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class SparqlService extends GenericService<SparqlService>{

  constructor(http: HttpClient) {
    super(http, "sparql")
  }

  sendQuery(sparql: SparqlData){
    return this.http.post<any>(`${this._url_}/${this.url}/`, sparql, { headers: this.cabecalho() })
  }
}