import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {

  url = "http://localhost:3001/angular"

  constructor(protected http: HttpClient, protected url2: String) {}

  salvar(t: T){
    console.log(t)
    return this.http.post<T>(`${this.url}/${this.url2}/salvar`, t)
  }

  atualizar(t: T){
    console.log(t)
    return this.http.put<T>(`${this.url}/${this.url2}`, t)
  }

  deletar(id: String){
    console.log(id)
    //return this.http.delete<String>(`${this.url}/${this.url2}`, id)
  }

  getId(id: String){
    console.log(id)
    //return this.http.get<T>(`${this.url}/${this.url2}`, id)
  }

  getTodos(): Observable<T[]>{
    return this.http.get<T[]>(`${this.url}/${this.url2}/getTodos`)
  }
}
