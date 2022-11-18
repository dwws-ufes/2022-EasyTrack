import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService extends GenericService<Configuracao> {
  
  constructor(http: HttpClient) {
    super(http, "configuracao")
  }
}
