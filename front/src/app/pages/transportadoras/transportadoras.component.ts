import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { OperadorLogistico } from 'src/app/model/operador-logistico.model';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {
  private sparkqlData:any;
  operador = "Correios"
  trasportadoras?: any[]
  carregandoLista: Boolean = false
  infoExtra: any;
  trasportadorasFutura: any= [{nome_fantasia: 'DHL', razao_social:'DHL LOGISTICS (BRAZIL) LTDA.', documento:'02.836.056/0138-60', sparql:'DHL'},{nome_fantasia: 'FedEx', razao_social:'FEDEX BRASIL LOGISTICA E TRANSPORTE LTDA', documento:'10.970.887/0001-02', sparql:'FedEx'}];

  constructor(private operadorLogisticoService: OperadorLogisticoService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.carregandoLista = true;
    this.operadorLogisticoService.getTodos().subscribe((op: OperadorLogistico[]) => {
      this.trasportadoras = op
      this.carregandoLista = false
    })
  }

  getSparql(oper:string): void{
    this.operador = oper;
    let query =  `
    SELECT * WHERE {
    ?uri rdfs:label "${this.operador}"@en;
    rdfs:comment ?comment;
    dbp:logo ?logo;
    dbo:wikiPageExternalLink ?wikiPageExternalLink .	
    FILTER (langMatches(lang(?comment),"PT"))
    }`;

    this.getRDF(query).pipe(
      map (res => {
        this.infoExtra=res;
        this.infoExtra.operador=oper
        return this.infoExtra
      })).subscribe();;
  }

  getRDF(query: string): Observable<any[]> {
    const params = new HttpParams()
        .set('query', query)
        .set('format', 'json');
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/sparql-results+json'
        }),
        params: params
      };
      return this.http.get<any>('https://dbpedia.org/sparql', options).pipe(
        catchError(this.handleError('getRDF', []))
      );
  }
    
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console
  
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
  }
  
  private log(message: string, data?: any) {
      console.log(`SparqlService: ${message}`, data);
  }


}